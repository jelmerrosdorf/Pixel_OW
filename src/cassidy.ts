import * as PIXI from 'pixi.js'

export class Cassidy extends PIXI.Sprite {

    xspeed: number = 0

    constructor(texture: PIXI.Texture){
        super(texture)

        this.scale.set(-1, 1)
        this.x = 300;
        this.y = 500;
        this.width = 150;
        this.height = 150;

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
    }

    update(delta: number) {
        this.x += this.xspeed * delta

        if(this.x <= 150) {
            this.xspeed = 0
        }
    }

    onKeyDown(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case "A":
            case "ARROWLEFT":
                this.xspeed = -7
                break
            case "D":
            case "ARROWRIGHT":
                this.xspeed = 7
                break
        }
    }

    onKeyUp(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case "A":
            case "D":
            case "ARROWLEFT":
            case "ARROWRIGHT":
                this.xspeed = 0
                break
        }
    }
}

