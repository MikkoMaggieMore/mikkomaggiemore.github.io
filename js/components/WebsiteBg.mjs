export class WebsiteBg {
	constructor() {
		this.template = `
			<div id="website-bg"></div>
		`;
	}
	script() {
		const banner = document.querySelector("#website-bg");
		document.addEventListener("scroll", (event) => {
			banner.style.setProperty("transform", `translate3d(0px, ${(window.scrollY / -2)}px, 0px)`);
		});
	}
}
