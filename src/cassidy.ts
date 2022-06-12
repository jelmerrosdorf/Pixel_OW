import * as PIXI from 'pixi.js'
import { Game } from './game'

export class Cassidy extends PIXI.Sprite {

    private xspeed: number = 0
    private game: Game

    constructor(texture: PIXI.Texture, game: Game) {
        super(texture)
        this.game = game
        
        this.scale.set(-1, 1)
        this.x = 300;
        this.y = 500;
        this.width = 150;
        this.height = 150;

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
    }

    public update(delta: number) {
        this.x += this.xspeed * delta

        if (this.x <= 150) {
            this.x = 150
        }
    }

    private shoot() {
        this.game.spawnBullet(this.x + 150)
    }

    private onKeyDown(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case "F":
                this.shoot()
                break
            case "A":
                this.xspeed = -7
                break
            case "D":
                this.xspeed = 7
                break
        }
    }

    private onKeyUp(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case "F":
                break
            case "A":
            case "D":
                this.xspeed = 0
                break
        }
    }
}

