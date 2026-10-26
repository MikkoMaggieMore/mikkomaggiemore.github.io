import { App } from "./App.mjs";
import { WebsiteBg } from "./components/WebsiteBg.mjs";
import { Logo } from "./components/Logo.mjs";
import { HeaderRightLink } from "./components/HeaderRightLink.mjs";
import { LinkCardRow } from "./components/LinkCardRow.mjs";
import { LinkCard } from "./components/LinkCard.mjs";
import { Text } from "./components/Text.mjs";
import { TextLink } from "./components/Text.mjs";
import { Separator } from "./components/Text.mjs";
import { ImageCardRow } from "./components/ImageCard.mjs";
import { ImageCard } from "./components/ImageCard.mjs";

async function setTabInfo(image, title) {
	var tabIcon = document.createElement("link");
	tabIcon.setAttribute("rel", "icon");
	tabIcon.setAttribute("href", `../img/favicons/${image}`);
	var tabTitle = document.createElement("title");
	tabTitle.innerText = title;
	document.querySelector("head").appendChild(tabTitle);
	document.querySelector("head").appendChild(tabIcon);
}

async function pullMidis() {

}

function clAssign(cls, el) {
	const target = document.querySelector(el);
	target.insertAdjacentHTML("beforeend", cls.template);
	if (cls.script) {
		cls.script();
	}
}

function main(root) {
	setTabInfo("websiteFavicon.png", "Mikko Maggie More");
	//Global components; Will be used on any page that calls this mdg_main
	clAssign(new App(), root);
	clAssign(new WebsiteBg(), "#website-bg-container");
	clAssign(new Logo(), "#nav-header-left");

	clAssign(new HeaderRightLink("/games", "Games"), "#nav-header-right");
	clAssign(new HeaderRightLink("/midis", "MIDIs"), "#nav-header-right");

	clAssign(new LinkCardRow(0), "#website-bg-container");

	clAssign(new LinkCard("https://www.youtube.com/channel/UCCOqJ9a4nttD8KH6oJlAacQ", "YouTube", "yt2016icon.png"), ".link-card-row-0");
	clAssign(new LinkCard("https://soundcloud.com/bolls-boyce", "SoundCloud", "scIcon.png"), ".link-card-row-0");
	clAssign(new LinkCard("https://github.com/MikkoMaggieMore", "GitHub", "githubIcon.png"), ".link-card-row-0");
	clAssign(new LinkCard("https://archive.org/details/@mikko_howard", "Archive", "archive.ico"), ".link-card-row-0");

	//Path specific components
	switch (location.pathname) {
		case "/":
			clAssign(new Text("This website is still under construction, look around if you want but a lot of this is subject to change", 18), "#website-content-main");
			clAssign(new Text("If you have any questions, or need to contact me for whatever reason, reach out at maggiebite236@gmail.com", 18), "#website-content-main");
			clAssign(new Separator(0), "#website-content-main");
			clAssign(new Text("My name is Mikko", 24), "#website-content-main");
			clAssign(new Text("I've been posting my videos and &quot;music&quot; since 2021", 18), "#website-content-main");
			clAssign(new Text("You most likely won't find anything I've made from over a few years ago, but if you do, please let me know", 18), "#website-content-main");
			clAssign(new Separator(1), "#website-content-main");
			clAssign(new Text("I also program on occasion, and I obviously had to for this website a lot.", 18), "#website-content-main");
			/*clAssign(new ImageCardRow(0), "#website-content-main");
			clAssign(new ImageCard("lmao.gif", 640, 360), ".image-card-row-0");
			clAssign(new ImageCard("lmao.gif", 640, 360), ".image-card-row-0");
			clAssign(new ImageCard("lmao.gif", 640, 360), ".image-card-row-0");
			clAssign(new ImageCardRow(1), "#website-content-main");
			clAssign(new ImageCard("lmao.gif", 640, 360), ".image-card-row-1");
			clAssign(new ImageCard("lmao.gif", 640, 360), ".image-card-row-1");
			clAssign(new ImageCard("lmao.gif", 640, 360), ".image-card-row-1");*/
		break;
		case "/midis/":
			fetch("../xml/midis.xml")
				.then((response) => response.text())
				.then((text) => {
					const doc = new DOMParser().parseFromString(text, "text/xml");
					doc.querySelectorAll("group").forEach((group) => {
						const groupName = group.getAttribute("name");
						const songs = [...group.querySelectorAll("song")].map((song) => song.textContent.trim());
						clAssign(new Text(groupName, 24), "#website-content-main");
						clAssign(new Separator(0), "#website-content-main");
						for (let i = 0; i < songs.length; i++) {
							clAssign(new TextLink(songs[i], 16, `../midi-files/${songs[i]}`), "#website-content-main");
						}
						clAssign(new Separator(1), "#website-content-main");
					});
				});
		break;
		case "/games/":
			fetch("../xml/games.xml")
				.then((response) => response.text())
				.then((text) => {
					const doc = new DOMParser().parseFromString(text, "text/xml");
					doc.querySelectorAll("group").forEach((group) => {
						const groupName = group.getAttribute("name");
						const games = [...group.querySelectorAll("game")].map((game) => game.textContent.trim());
						clAssign(new Text(groupName, 24), "#website-content-main");
						clAssign(new Separator(0), "#website-content-main");
						for (let i = 0; i < games.length; i++) {
							clAssign(new TextLink(games[i], 16, `../game-files/${games[i]}`), "#website-content-main");
						}
						clAssign(new Separator(1), "#website-content-main");
					});
				});
		break;
		default:
			console.error("MDG error: Path not defined.");
		break;
	}
}

document.addEventListener("DOMContentLoaded", (e) => {
	main("#app");
});
