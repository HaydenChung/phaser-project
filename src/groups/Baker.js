import Phaser from 'phaser'
import Character from '../sprites/Character'
import ReSprite from '../sprites/ReSprite'
import config from '../config'

export default class Baker extends Phaser.Group{
    constructor({game, x, y, tagName='', asset, reversalBubble= false}){
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

        let bubbleLocation = reversalBubble === true ? this.character.width/2 : 0 ;

        this.isRight = this.add(new ReSprite(game, bubbleLocation, -this.character.height, 'bubble_1'))
        this.isWrong = this.add(new ReSprite(game, bubbleLocation, -this.character.height, 'bubble_2'))
        this.isRight.anchor.setTo(1.5,1)
        this.isWrong.anchor.setTo(1.5,1)
        this.isRight.reScale(.7)
        this.isWrong.reScale(.7)
        this.isRight.visible = false
        this.isWrong.visible = false

        this.rightSound = game.add.audio('correctAnswer')
        this.wrongSound = game.add.audio('wrongAnswer')


        this.onDestroy.add(this.onDestroyHandler, this)
        
        // if(reversalBubble === true){
        //     this.isRight.unEqualScale(-.7,.7)
        //     this.isWrong.unEqualScale(-.7,.7)
        //     this.isRight.x = this.character.width
        //     this.isWrong.x = this.character.width
        // }
    }

    rightAnswer(){
        clearTimeout(this.timer)
        this.rightSound.play()
        this.isWrong.visible = false
        this.isRight.visible = true
        this.timer = setTimeout(()=>this.isRight.visible = false, 1000)
    }

    wrongAnswer(){
        clearTimeout(this.timer)
        this.wrongSound.play()
        this.isRight.visible = false
        this.isWrong.visible = true
        this.timer = setTimeout(()=>this.isWrong.visible = false, 1000)
    }

    onDestroyHandler(){
        this.rightSound.destroy()
        this.wrongSound.destroy()
    }
}