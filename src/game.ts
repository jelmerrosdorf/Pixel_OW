import * as PIXI from 'pixi.js'
import cassidyImage from "./images/cassidy.png"
import backgroundImage from "./images/background.png"
import zenyattaImage from "./images/zenyatta.png"
import { Cassidy } from './cassidy'
import { Zenyatta } from './zenyatta'


export class Game {

    pixi: PIXI.Application
    loader: PIXI.Loader

    cassidy: Cassidy
    zenyatta: Zenyatta

    constructor(pixi : PIXI.Application) {

        this.pixi = pixi

        //
        // STAP 1 is verhuisd naar startmenu.ts
        //

    
        // Preload all the textures
        this.loader = new PIXI.Loader()
        this.loader.add('backgroundImage', backgroundImage)
            .add('cassidyImage', cassidyImage)
            .add('zenyattaImage', zenyattaImage)
        this.loader.load(() => this.loadCompleted())
    }

    loadCompleted() {
        // After loading, create sprites
        let background = new PIXI.Sprite(this.loader.resources["backgroundImage"].texture!)
        background.scale.set(
            window.innerWidth / background.getBounds().width,
            window.innerHeight / background.getBounds().height
        )
        this.pixi.stage.addChild(background)

        this.cassidy = new Cassidy(this.loader.resources["cassidyImage"].texture!)
        this.pixi.stage.addChild(this.cassidy)

        this.zenyatta = new Zenyatta(this.loader.resources["zenyattaImage"].texture!)
        this.pixi.stage.addChild(this.zenyatta)

        this.pixi.ticker.add((delta: number) => this.update(delta))
    }

    update(delta: number) {
        this.cassidy.update(delta)
        this.zenyatta.update(delta)
    }
}