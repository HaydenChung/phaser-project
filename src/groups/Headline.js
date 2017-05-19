import Phaser from 'phaser'
import config from '../config'

export default class Headline extends Phaser.Group {
    constructor({game, x, y}){
        super(game)

        this.x = x;
        this.y = y;

        let graphics = game.add.graphics(0, 0)
        graphics.lineStyle(60*config.scaleRate, 0x15b7b9, 1)
        graphics.lineTo(game.world._width, 0)

        graphics.moveTo(0, 50*config.scaleRate)
        graphics.lineStyle(10*config.scaleRate, 0xe8812e, 1)
        graphics.lineTo(game.world._width, 50*config.scaleRate)

        this.add(graphics)

    }
}