import Phaser from 'phaser'
import config from '../config'
import ReSprite from '../sprites/ReSprite'

export default class GameA_Box extends Phaser.Group {
    constructor({game, x, y}){
        super(game)

        this.x = x;
        this.y = y;

        this.leftBox = this.add(new ReSprite(game, -20*config.scaleRate, 0, 'belt_2'))

        this.rollerA = this.add(new ReSprite(game, 180*config.scaleRate, 255*config.scaleRate, 'belt_3'))
        this.rollerA.anchor.setTo(.5)
        this.rollerB = this.add(new ReSprite(game, 135*config.scaleRate, 255*config.scaleRate, 'belt_4'))
        this.rollerB.anchor.setTo(.5)

        game.add.tween(this.rollerA).to({angle: 360}, 5000, Phaser.Easing.Linear.None, true).loop()
        game.add.tween(this.rollerB).to({angle: -360}, 5000, Phaser.Easing.Linear.None, true).loop()

    }
}