import * as PIXI from 'pixi.js'

export class Zenyatta extends PIXI.Sprite {
    constructor(texture: PIXI.Texture){
        super(texture)
        this.x = 1200;
        this.y = 500;
        this.width = 150;
        this.height = 150;
    }
}