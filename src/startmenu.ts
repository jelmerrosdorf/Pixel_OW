import * as PIXI from 'pixi.js'
import { Game } from './game'
import { Button } from './button';

export class Startmenu {

    private pixi: PIXI.Application
    private button: Button


    constructor() {
        console.log("Startmenu created!")

        //
        // STAP 1 - maak een pixi canvas
        //
        this.pixi = new PIXI.Application({
            width: window.innerWidth,
            height: window.innerHeight,
            forceCanvas: true
        })

        document.body.appendChild(this.pixi.view)


        this.button = new Button(
            this.pixi.screen.width / 2,
            this.pixi.screen.height /2
        )

        this.pixi.stage.addChild(this.button)


        this.button.on("pointerdown", () => this.onClick())
    }


    private onClick() {
        this.button.destroy()
        new Game(this.pixi)
    }
}

new Startmenu()