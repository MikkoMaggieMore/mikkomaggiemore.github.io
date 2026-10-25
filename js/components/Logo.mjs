export class Logo {
	constructor() {
		this.template = `
			<span class="logo header-text">
				<a>
					Mikko Maggie More
				</a>
			</span>
		`;
	}
	script() {
		const logoLink = document.querySelector(".logo a");
		logoLink.href = window.location.origin;
	}
}
