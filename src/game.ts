import * as PIXI from 'pixi.js'
import cassidyImage from "./images/cassidy.png"
import zenyattaImage from "./images/zenyatta.png"
import bulletImage from "./images/bullet.png"
import orbImage from "./images/orb.png"
import { Cassidy } from './cassidy'
import { Zenyatta } from './zenyatta'
import { Bullet } from './bullet'
import { Orb } from './orb'


export class Game {

    public pixi: PIXI.Application
    private loader: PIXI.Loader
    private backgroundTextures: PIXI.Texture[] = []

    public cassidy: Cassidy
    public zenyatta: Zenyatta
    private bullets: Bullet[] = []
    private orbs: Orb[] = []

    constructor(pixi: PIXI.Application) {
        console.log("ik ben een game")

        this.pixi = pixi

        //
        // STAP 1 is verhuisd naar startmenu.ts
        //


        // Preload all the textures
        this.loader = new PIXI.Loader()
        this.loader.add('spritesheet', "spritesheet.json")
            .add('cassidyImage', cassidyImage)
            .add('zenyattaImage', zenyattaImage)
            .add('bulletImage', bulletImage)
            .add('orbImage', orbImage)
        this.loader.load(() => this.loadCompleted())
    }

    private loadCompleted() {
        // After loading, create sprites
        for (let i = 0; i < 8; i++) {
            const texture = PIXI.Texture.from(`frame_${i}_delay-0.1s.png`)
            this.backgroundTextures.push(texture);
        }

        let background = new PIXI.AnimatedSprite(this.backgroundTextures)
        background.scale.set(
            window.innerWidth / background.getBounds().width,
            window.innerHeight / background.getBounds().height
        )
        this.pixi.stage.addChild(background)
        background.animationSpeed = 0.15
        background.play()

        this.cassidy = new Cassidy(this.loader.resources["cassidyImage"].texture!, this)
        this.pixi.stage.addChild(this.cassidy)

        this.zenyatta = new Zenyatta(this.loader.resources["zenyattaImage"].texture!, this)
        this.pixi.stage.addChild(this.zenyatta)

        this.pixi.ticker.add((delta: number) => this.update(delta))
    }

    private update(delta: number) {
        this.cassidy.update(delta)
        this.zenyatta.update(delta)

        for (let bullet of this.bullets) {
            bullet.update()
        }

        for (let orb of this.orbs) {
            orb.update()
        }
    }

    public spawnBullet(x: number, y: number) {
        let b = new Bullet(this.loader.resources["bulletImage"].texture!, this, x, y)
        this.bullets.push(b)
        this.pixi.stage.addChild(b)
    }

    public spawnOrb(x: number, y: number) {
        let o = new Orb(this.loader.resources["orbImage"].texture!, this, x, y)
        this.orbs.push(o)
        this.pixi.stage.addChild(o)
    }

    public removeBullet(bullet: Bullet) {
        this.bullets = this.bullets.filter((b: Bullet) => b != bullet)
        bullet.destroy()
    }

    public removeOrb(orb: Orb) {
        this.orbs = this.orbs.filter((o: Orb) => o != orb)
        orb.destroy()
    }
}   