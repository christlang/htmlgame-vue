'use strict'

const gamedata = [
	{
		name: 'Wurzelelement',
		elements: [
			{name: 'html', role: 'root element'}
		]
	}, {
		name: 'Metadaten',
		elements: [
			{name: 'head', role: 'document metadata container'},
			{name: 'title', role: 'document title'},
			{name: 'base', role: 'base URL'},
			{name: 'link', role: 'inter-document relationship metadata'},
			{name: 'meta', role: 'metadata'},
			{name: 'style', role: 'style (presentation) information'}
		]
	}, {
		name: 'Abschnitte',
		elements: [
			{name: 'body', role: 'document body'},
			{name: 'article', role: 'article'},
			{name: 'section', role: 'section'},
			{name: 'nav', role: 'group of navigational links'},
			{name: 'aside', role: 'tangential content'},
			{name: 'h1', role: 'heading'},
			{name: 'h2', role: 'heading'},
			{name: 'h3', role: 'heading'},
			{name: 'h4', role: 'heading'},
			{name: 'h5', role: 'heading'},
			{name: 'h6', role: 'heading'},
			{name: 'header', role: 'header'},
			{name: 'footer', role: 'footer'},
			{name: 'address', role: 'contact information'}
		]
	}, {
		name: 'Inhaltsgruppierung',
		elements: [
			{name: 'p', role: 'paragraph'},
			{name: 'hr', role: 'thematic break'},
			{name: 'pre', role: 'preformatted text'},
			{name: 'blockquote', role: 'block quotation'},
			{name: 'ol', role: 'ordered list'},
			{name: 'ul', role: 'unordered list'},
			{name: 'li', role: 'list item'},
			{name: 'dl', role: 'description list'},
			{name: 'dt', role: 'term or name'},
			{name: 'dd', role: 'description or value'},
			{name: 'figure', role: 'figure with optional caption'},
			{name: 'figcaption', role: 'figure caption'},
			{name: 'div', role: 'generic flow container'},
			{name: 'main', role: 'main content'}
		]
	}, {
		name: 'Textsemantik',
		elements: [
			{name: 'a', role: 'hyperlink'},
			{name: 'em', role: 'emphatic stress'},
			{name: 'strong', role: 'strong importance'},
			{name: 'small', role: 'small print'},
			{name: 's', role: 'struck text'},
			{name: 'cite', role: 'cited title of a work'},
			{name: 'q', role: 'quoted text'},
			{name: 'dfn', role: 'defining instance'},
			{name: 'abbr', role: 'abbreviation'},
			{name: 'data', role: 'machine-readable contents'},
			{name: 'time', role: 'date and/or time'},
			{name: 'code', role: 'code fragment'},
			{name: 'var', role: 'variable or placeholder text'},
			{name: 'samp', role: '(sample) output'},
			{name: 'kbd', role: 'user input'},
			{name: 'sub', role: 'subscript'},
			{name: 'sup', role: 'superscript'},
			{name: 'i', role: 'offset text conventionally styled in italic'},
			{name: 'b', role: 'offset text conventionally styled in bold'},
			{name: 'u', role: 'offset text conventionally styled with an underline'},
			{name: 'mark', role: 'marked (highlighted) text'},
			{name: 'ruby', role: 'ruby annotation'},
			{name: 'rb', role: 'ruby base text. Not in WHATWG HTML'},
			{name: 'rtc', role: 'ruby text container. Not in WHATWG HTML'},
			{name: 'rt', role: 'ruby text'},
			{name: 'rp', role: 'ruby parenthesis'},
			{name: 'bdi', role: 'BiDi isolate'},
			{name: 'bdo', role: 'BiDi override'},
			{name: 'span', role: 'generic span'},
			{name: 'br', role: 'line break'},
			{name: 'wbr', role: 'line-break opportunity'}
		]
	}, {
		name: 'Bearbeitung',
		elements: [
			{name: 'ins', role: 'inserted text'},
			{name: 'del', role: 'deleted text'}
		]
	}, {
		name: 'Eingebettete Inhalte',
		elements: [
			{name: 'picture', role: 'image container'},
			{name: 'img', role: 'image'},
			{name: 'iframe', role: 'nested browsing context (inline frame)'},
			{name: 'embed', role: 'integration point for plugins'},
			{name: 'object', role: 'generic external content'},
			{name: 'param', role: 'initialization parameters for plugins'},
			{name: 'video', role: 'video'},
			{name: 'audio', role: 'audio stream'},
			{name: 'source', role: 'media source'},
			{name: 'track', role: 'supplementary media track'},
			{name: 'map', role: 'image-map definition'},
			{name: 'area', role: 'image-map hyperlink'},
			{name: 'math', role: 'MathML container'},
			{name: 'svg', role: 'SVG container'}
		]
	}, {
		name: 'Tabellendaten',
		elements: [
			{name: 'table', role: 'table'},
			{name: 'caption', role: 'table title'},
			{name: 'colgroup', role: 'table column group'},
			{name: 'col', role: 'table column'},
			{name: 'tbody', role: 'table row group'},
			{name: 'thead', role: 'table heading group'},
			{name: 'tfoot', role: 'table footer row group'},
			{name: 'tr', role: 'table row'},
			{name: 'td', role: 'table cell'},
			{name: 'th', role: 'table header cell'}
		]
	}, {
		name: 'Formulare',
		elements: [
			{name: 'form', role: 'user-submittable form'},
			{name: 'label', role: 'caption for a form control'},
			{name: 'input', role: 'input control'},
			{name: 'button', role: 'button'},
			{name: 'select', role: 'option-selection form control'},
			{name: 'datalist', role: 'predefined options for other controls'},
			{name: 'optgroup', role: 'group of options'},
			{name: 'option', role: 'option'},
			{name: 'textarea', role: 'text input area'},
			{name: 'keygen', role: 'key-pair generator/input control. Deprecated, not in WHATWG HTML'},
			{name: 'output', role: 'result of a calculation in a form'},
			{name: 'progress', role: 'progress indicator'},
			{name: 'meter', role: 'scalar gauge'},
			{name: 'fieldset', role: 'set of related form controls'},
			{name: 'legend', role: 'title or explanatory caption'}
		]
	}, {
		name: 'Interaktion',
		elements: [
			{name: 'details', role: 'control for on-demand information'},
			{name: 'summary', role: 'summary or caption for details'},
			{name: 'menu', role: 'list of commands as popup menu'},
			{name: 'menuitem', role: 'command in popup menu. Not in WHATWG HTML'}
		]
	}, {
		name: 'Skripte',
		elements: [
			{name: 'script', role: 'embedded script'},
			{name: 'noscript', role: 'fallback content for script'},
			{name: 'template', role: 'fragments of HTML to be cloned and inserted'},
			{name: 'canvas', role: 'canvas for dynamic graphics'}
		]
	}, {
		name: 'Experimentell',
		value: 'bonus',
		elements: [
			{name: 'hgroup', role: 'heading group'},
			{name: 'dialog', role: 'interactive dialog box'},
			{name: 'slot', role: 'slot in shadow DOM'}
		]
	}, {
		name: 'Veraltet',
		value: 'malus',
		elements: [
			{name: 'applet', role: 'use embed or object instead'},
			{name: 'acronym', role: 'use abbr instead'},
			{name: 'bgsound', role: 'use audio instead'},
			{name: 'dir', role: 'use ul instead'},
			{name: 'frame', role: 'use iframe and CSS or server-side includes'},
			{name: 'frameset', role: 'use iframe and CSS or server-side includes'},
			{name: 'noframes', role: 'use iframe and CSS or server-side includes'},
			{name: 'isindex', role: 'use an explicit form and text field combination instead'},
			{name: 'listing', role: 'use pre and code instead'},
			{name: 'nextid', role: 'use GUIDs instead'},
			{name: 'noembed', role: 'use object instead of embed when fallback is necessary'},
			{name: 'plaintext', role: 'use the "text/plain" MIME type instead'},
			{name: 'strike', role: 'use del if the element is marking an edit, otherwise use s'},
			{name: 'xmp', role: 'use pre and code instead'},
			{name: 'basefont', role: 'use appropriate elements or CSS instead'},
			{name: 'big', role: 'use h1, strong or mark'},
			{name: 'blink', role: 'use appropriate elements or CSS instead'},
			{name: 'center', role: 'use appropriate elements or CSS instead'},
			{name: 'font', role: 'use appropriate elements or CSS instead'},
			{name: 'marquee', role: 'use appropriate elements or CSS instead'},
			{name: 'multicol', role: 'use appropriate elements or CSS instead'},
			{name: 'nobr', role: 'use appropriate elements or CSS instead'},
			{name: 'spacer', role: 'use appropriate elements or CSS instead'},
			{name: 'tt', role: 'use kbd, var, code or samp element'}
		]
	}
]

const els = {},
	experimental = {},
	deprecated = {}

for (let i = 0; i < gamedata.length; i++) {
	if (gamedata[i].value === 'bonus')
		gamedata[i].elements.map(el => {
			experimental[el.name] = true
		})
	else if (gamedata[i].value === 'malus')
		gamedata[i].elements.map(el => {
			deprecated[el.name] = true
		})
	else gamedata[i].elements.map(el => {
		els[el.name] = true
	})
}
