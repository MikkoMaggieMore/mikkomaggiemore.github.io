export class Text {
	constructor(label, size) {
		this.template = `
			<span class="text" style="font-size:${size}px;">
				${label}
			</span>
		`;
	}
}

export class Separator {
	constructor(invisible) {
		var visible = "visible";
		if (invisible == 1) {
			visible = "hidden"
		}
		this.template = `
			<div class="separator" style="visibility:${visible};"></div>
		`;
	}
}

export class TextLink {
	constructor(label, size, href) {
		this.template = `
			<a class="text blue-link" href="${href}" style="font-size:${size}px;">
				${label}
			</a>
		`;
	}
}