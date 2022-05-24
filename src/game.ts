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

    constructor() {

        // Create PIXI canvas
        this.pixi = new PIXI.Application({ width: 1024, height: 384 })
        document.body.appendChild(this.pixi.view)


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
        this.pixi.stage.addChild(background)

        this.cassidy = new Cassidy(this.loader.resources["cassidyImage"].texture!)
        this.pixi.stage.addChild(this.cassidy)

        this.zenyatta = new Zenyatta(this.loader.resources["zenyattaImage"].texture!)
        this.pixi.stage.addChild(this.zenyatta)

        this.pixi.ticker.add((delta: number) => this.update(delta))
    }

    update(delta: number) {
        this.cassidy.update(delta)
    }
}

new Game()