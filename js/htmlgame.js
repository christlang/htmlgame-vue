'use strict'
Vue.config.devtools = true

Vue.component('found-elements', {
	props: ['color', 'list'],
	template: `<div class="output" :class="color">
		<slot></slot>: <span v-for="item in list">{{item}}</span>
	</div>`
})

const game = new Vue({
	el: 'main',
	created: function() {
		this.time = this.timeToPlay
	},
	mounted: function() {
		this.$el.style.display = 'block'
	},

	data: {
		timeToPlay: 360,
		//get timeToPlay() {return 360},
		todo: Object.keys(els).length,
		inputValue: '',
		timerState: 'off',
		time: 0,
		els: [],
		deprecated: [],
		experimental: [],
		results: []
	},

	components: {
		'test-element': {
			props: ['list', 'color'],
			template: `<div class="output" :class="color">
				<slot></slot>: <span v-for="item in list">{{item}}</span>
			</div>`
		},
		'report-list': {
			props: ['list', 'type'],
			template: `<ul class="elementlist" :class="type">
				<li v-for="element in list">
					<code :title="element.role">{{element.name}}</code>
				</li>
			</ul>`
		}
	},

	computed: {
		giveupDisabled: function() {
			return this.timerState !== 'on'
		},
		pauseDisabled: function() {
			return this.timerState !== 'on' && this.timerState !== 'paused'
		},
		pauseText: function() {
			return this.pauseDisabled === true? 'Fortsetzen' : 'Pause'
		},
		done: function() {
			return this.els.length
		},
		inputDisabled: function() {
			return this.timerState !== 'off' && this.timerState !== 'on'
		},
		minutes: function() {
			return (this.time - this.time % 60) / 60
		},
		seconds: function() {
			const _seconds = this.time % 60
			return _seconds < 10 ? '0' + _seconds : _seconds.toString()
		},
		score: function() {
			let _score = this.els.length
			_score += Math.floor((this.experimental.length - this.deprecated.length) / 2)
			_score += Math.round((this.time * this.els.length) / (3 * this.todo))
			if (this.els.length === this.todo)
				_score += 100
			return _score
		}
	},

	methods: {
		timer: function() {
			const frequence = 350,
				totalTime = this.time? this.time : this.timeToPlay
			let start = 0,
				interval = 0,
				diff = 0,
				passedSeconds = 0
			const timerInstance = () => {
				if (this.timerState === 'over') return
				if (this.timerState === 'paused') return
				interval += frequence
				diff = new Date().getTime() - start - interval
				passedSeconds = Math.round(Math.floor(interval / 1000))
				this.time = totalTime - passedSeconds
				if (passedSeconds >= totalTime) {
					this.time = 0
					this.gameOver()
					return
				}
				setTimeout(timerInstance, frequence - diff)
			}
			start = new Date().getTime()
			setTimeout(timerInstance, frequence)
		},

		handleInput: function() {
			if (this.timerState === 'off') {
				this.timerState = 'on'
				this.timer()
			}
			if (els[this.inputValue]) {
				if (this.els.indexOf(this.inputValue) < 0) {
					this.els = this.els.concat(this.inputValue).sort()
					this.inputValue = ''
				}
			} else if (deprecated[this.inputValue]) {
				if (this.deprecated.indexOf(this.inputValue) < 0) {
					this.deprecated = this.deprecated.concat(this.inputValue).sort()
					this.inputValue = ''
				}
			} else if (experimental[this.inputValue]) {
				if (this.experimental.indexOf(this.inputValue) < 0) {
					this.experimental = this.experimental.concat(this.inputValue).sort()
					this.inputValue = ''
				}
			}
		},

		getResults: function() {
			for (let i = 0; i < gamedata.length; i++) {
				const good = [],
					bad = []
				if (gamedata[i].value) continue
				gamedata[i].elements.forEach(el => {
					if (this.els.indexOf(el.name) >= 0)
						good.push(el)
					else
						bad.push(el)
				})
				this.results.push({
					name: gamedata[i].name,
					total: gamedata[i].elements.length,
					found: good,
					missing: bad
				})
			}
		},

		pause: function() {
			if (this.timerState === 'paused') {
				this.timerState = 'on'
				this.timer()
			} else {
				this.timerState = 'paused'
			}
		},

		gameOver: function() {
			this.timerState = 'over'
			this.getResults()
		},

		restart: function() {
			this.inputValue = ''
			this.timerState = 'off'
			this.time = this.timeToPlay
			this.els = this.deprecated = this.experimental = this.results = []
		}
	}
})
