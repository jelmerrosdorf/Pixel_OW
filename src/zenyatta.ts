import * as PIXI from 'pixi.js'
import { Game } from './game'

export class Zenyatta extends PIXI.Sprite {

    private xspeed: number = 0
    private game: Game

    constructor(texture: PIXI.Texture, game: Game){
        super(texture)
        this.game = game

        this.x = 1200;
        this.y = 500;
        this.width = 150;
        this.height = 150;

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
    }

    public update(delta: number) {
        this.x += this.xspeed * delta

        if(this.x >= 1400) {
            this.x = 1400
        }
    }

    private shoot() {
        this.game.spawnOrb(this.x + 80, this.y + 35)
    }

    private onKeyDown(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case "K":
                this.shoot()
                break
            case "ARROWLEFT":
                this.xspeed = -7
                break
            case "ARROWRIGHT":
                this.xspeed = 7
                break
        }
    }

    private onKeyUp(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case "K":
                break
            case "ARROWLEFT":
            case "ARROWRIGHT":
                this.xspeed = 0
                break
        }
    }
}