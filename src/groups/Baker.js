import Phaser from 'phaser'
import Character from '../sprites/Character'
import ReSprite from '../sprites/ReSprite'
import config from '../config'

export default class Baker extends Phaser.Group{
    constructor({game, x, y, tagName='', asset}){
        super(game)

        this.customState = {
            tagName
        }

        this.x = x
        this.y = y

        this.character = this.add(new Character({game, x:0, y:0, asset}))
        this.character.reScale(1.1)

        this.textBlock = game.add.text(
            0, -400*config.scaleRate, this.customState.tagName,
            { font: 'bold 25pt Arial', fill: 'rgb(33, 178, 167)', align: 'left', backgroundColor:'rgba(255, 255, 255, 0.5)'}, this
        )
        this.textBlock.anchor.setTo(.5)
        this.textBlock.scale.setTo(config.scaleRate)
        // this.textBlock.setShadow(-3, 0, 'rgb(43, 175, 89)', 0);

        this.isRight = this.add(new ReSprite(game, 0, -700*config.scaleRate, 'bubble_1'))
        this.isWrong = this.add(new ReSprite(game, 0, -700*config.scaleRate, 'bubble_2'))
        this.isRight.anchor.setTo(1.5,1)
        this.isWrong.anchor.setTo(1.5,1)
        this.isRight.reScale(.7)
        this.isWrong.reScale(.7)
        this.isRight.visible = false
        this.isWrong.visible = false
    }

    rightAnswer(){
        clearTimeout(this.timer)
        this.isWrong.visible = false
        this.isRight.visible = true
        this.timer = setTimeout(()=>this.isRight.visible = false, 1000)
    }

    wrongAnswer(){
        clearTimeout(this.timer)
        this.isRight.visible = false
        this.isWrong.visible = true
        this.timer = setTimeout(()=>this.isWrong.visible = false, 1000)
    }
}