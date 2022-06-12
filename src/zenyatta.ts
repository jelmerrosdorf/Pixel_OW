import * as PIXI from 'pixi.js'

export class Zenyatta extends PIXI.Sprite {

    xspeed: number = 0

    constructor(texture: PIXI.Texture){
        super(texture)

        this.x = 1200;
        this.y = 500;
        this.width = 150;
        this.height = 150;

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
    }

    update(delta: number) {
        this.x += this.xspeed * delta

        if(this.x >= 1400) {
            this.x = 1400
        }
    }



    onKeyDown(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case "ARROWLEFT":
                this.xspeed = -7
                break
            case "ARROWRIGHT":
                this.xspeed = 7
                break
        }
    }

    onKeyUp(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case "ARROWLEFT":
            case "ARROWRIGHT":
                this.xspeed = 0
                break
        }
    }
}