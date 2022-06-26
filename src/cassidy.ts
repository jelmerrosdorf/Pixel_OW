import * as PIXI from 'pixi.js'
import { Game } from './game'

export class Cassidy extends PIXI.Sprite {

    private xspeed: number = 0
    private yspeed: number = 0 
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

        if (this.x >= 1500) {
            this.x = 1500
        }

        this.y += this.yspeed * delta

        if (this.y >= 501) {
            this.y = 500
        } 
        
        if (this.y <= 74) {
            this.y = 75
        }
    }

    private jump() {
        this.yspeed = -10
    }

    private shoot() {
        this.game.spawnBullet(this.x + 80, this.y + 35)
    }

    private onKeyDown(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case "S":
                this.shoot()
                break
            case "W":
                this.jump()
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
            case "S":
                break
            case "W": 
                this.yspeed = 10
                break  
            case "A":
            case "D":
                this.xspeed = 0
                break
        }
    }
}

