import * as PIXI from 'pixi.js'
import { Game } from './game'

export class Bullet extends PIXI.Sprite {
    private game:Game

    constructor(texture: PIXI.Texture, game: Game, x: number) {
        super(texture)

        this.game = game
        this.pivot.x = 30
        this.x = x + 20
    }

    public update() {
        this.x += 3
        // if (this.x > 1400) {
        //     this.game.removeBullet(this)
        // }
    }
}