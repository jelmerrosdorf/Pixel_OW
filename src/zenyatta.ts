import * as PIXI from 'pixi.js'

export class Zenyatta extends PIXI.Sprite {
    constructor(texture: PIXI.Texture){
        super(texture)
        this.x = 850;
        this.y = 200;
        this.width = 150;
        this.height = 150;
    }
}