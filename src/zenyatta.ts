import * as PIXI from 'pixi.js'
import { Game } from './game'

export class Zenyatta extends PIXI.Sprite {

    private xspeed: number = 0
    private yspeed: number = 0

    private counter: number = 0
    private counter2: number = 0
    private cooldown: number = 60
    private cooldownShoot: boolean = true
    private cooldownJump: boolean = true

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

        if (this.x <= 825) {
            this.x = 825
        }
        
        if (this.x >= 1400) {
            this.x = 1400
        }

        this.y += this.yspeed * delta

        if (this.y >= 501) {
            this.y = 500
        }

        if (this.y <= 74) {
            this.y = 75
        }

        this.counter += delta
        this.counter2 += delta

        if (this.counter > this.cooldown + 30) {
            this.counter = 0
            this.cooldownJump = true
        }

        if (this.counter2 > this.cooldown + 60) {
            this.counter2 = 0
            this.cooldownShoot = true
        }
    }

    private jump() {
        if (this.cooldownJump == true) {
            this.yspeed = -10
        }
    }

    private shoot() {
        if (this.cooldownShoot == true) {
            this.game.spawnOrb(this.x + 50, this.y + 35)
        }
    }

    private onKeyDown(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case "ARROWDOWN":
                this.shoot()
                this.cooldownShoot = false
                break
            case "ARROWUP":
                this.jump()
                this.cooldownJump = false
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
            case "ARROWDOWN":
                break
            case "ARROWUP":
                this.yspeed = 10
                break    
            case "ARROWLEFT":
            case "ARROWRIGHT":
                this.xspeed = 0
                break
        }
    }
}