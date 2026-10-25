export class LinkCard {
	constructor(href, label, icon) {
		this.template = `
			<a class="link-card" href="${href}">
				<img class="link-card-icon" src="/img/favicons/${icon}"/>
				<span>${label}</span>
			</a>
		`;
	}
}
