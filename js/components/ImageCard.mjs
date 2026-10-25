export class ImageCard {
	constructor(image, width, height) {
		this.template = `
			<img class="image-card gif" src="/img/cards/${image}" width=${width} height=${height}></img>
		`;
	}
}

export class ImageCardRow {
	constructor(instance) {
		this.template = `
			<flex class="image-card-row image-card-row-${instance}"></flex>
		`;
	}
}