export class HeaderRightLink {
	constructor(href, label) {
		this.template = `
			<span class="header-text">
				<a href="${href}">${label}</a>
			</span>
		`;
	}
}
