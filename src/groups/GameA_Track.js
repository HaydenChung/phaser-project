import Phaser from 'phaser'
import config from '../config'
import ReSprite from '../sprites/ReSprite'

export default class GameA_Track extends Phaser.Group {
    constructor({game, x, y}){
        super(game)

        this.x = x;
        this.y = y;

        this.bottomTable = this.add(new ReSprite(game, 0, 250*config.scaleRate, 'belt_5'))
        this.bottomTable.unEqualScale(1, .8)

        this.belt = this.add(new ReSprite(game, 0, 270*config.scaleRate, 'belt_0'))
        this.belt.anchor.setTo(0,1)

        this.trackA = this.add(new ReSprite(game, 200*config.scaleRate, 242*config.scaleRate, 'belt_1'))
        this.trackA.anchor.setTo(0,1)

        this.trackB = this.add(new ReSprite(game, 150*config.scaleRate, 242*config.scaleRate, 'belt_1'))
        this.trackB.anchor.setTo(1,1)

        game.add.tween(this.trackA).to({x: game.world.width}, 22500, Phaser.Easing.Linear.None, true).loop()
        game.add.tween(this.trackB).to({x: game.world.width}, 22500, Phaser.Easing.Linear.None, true).loop()
   
    }
}