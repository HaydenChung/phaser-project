import Phaser from 'phaser'
import config from '../config'

export default class ReSprite extends Phaser.Sprite {
    constructor(game, x, y, key, frame){
        super(game, x, y, key, frame)
        this.scale.setTo(config.scaleRate)
        this.reScale = this.reScale.bind(this)
    }

    reScale(inputRate){
        this.scale.setTo(config.scaleRate*inputRate)
    }

    unEqualScale(x, y){
        this.scale.setTo(config.scaleRate*x, config.scaleRate*y)
    }
}