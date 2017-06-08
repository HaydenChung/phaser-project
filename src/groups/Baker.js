import Phaser from 'phaser'
import Character from '../sprites/Character'
import ReSprite from '../sprites/ReSprite'
import Bread from '../sprites/Bread'
import config from '../config'

export default class Baker extends Phaser.Group{
    constructor({game, x, y, tagName='', asset, charIndex, reversalBubble= false}){
        super(game)

        this.customState = {
            tagName,
            faceDiffY: [0,-5]
        }

        this.x = x
        this.y = y

        this.rightAnswer = this.rightAnswer.bind(this)
        this.wrongAnswer = this.wrongAnswer.bind(this)
        this.swapFace = this.swapFace.bind(this)
        this.onDestroyHandler = this.onDestroyHandler.bind(this)

        this.character = this.add(new Character({game, x:0, y:0, charIndex}))
        this.character.reScale(1.1)

        this.bread = this.add(new Bread({game, x: 0, y: -460*config.scaleRate, asset:'bread_9'}))
        this.bread.anchor.setTo(.5)
        this.bread.reScale(1.1)

        this.textBlock = game.add.text(
            0, -450*config.scaleRate, this.customState.tagName,
            { font: 'bold 25pt DFYuan-Md-HK-BF', fill: 'rgb(33, 178, 167)', align: 'left', backgroundColor:'rgba(255, 255, 255, 0.5)'},
            this
        )
        this.textBlock.anchor.setTo(.5)
        this.textBlock.scale.setTo(config.scaleRate)

        this.hands = this.add(new ReSprite(game, 0, -420*config.scaleRate, 'hands')).anchor.setTo(.5)

        let bubbleLocation = reversalBubble === true ? this.character.width/2 : 0 ;

        this.faceSet = []

        this.faceSet.normal = this.add(new ReSprite(game, 0, (-this.character.height/10*8.1)+(this.customState.faceDiffY[charIndex]*config.scaleRate), `face_${charIndex}_0`))
        this.faceSet.happy = this.add(new ReSprite(game, 0, (-this.character.height/10*8.1)+(this.customState.faceDiffY[charIndex]*config.scaleRate), `face_${charIndex}_1`))
        this.faceSet.sad = this.add(new ReSprite(game, 0, (-this.character.height/10*8.1)+(this.customState.faceDiffY[charIndex]*config.scaleRate), `face_${charIndex}_2`))
        this.faceSet.normal.anchor.setTo(.5)
        this.faceSet.happy.anchor.setTo(.5)
        this.faceSet.sad.anchor.setTo(.5)

        this.faceSet.normal.reScale(1.1).visible = true
        this.faceSet.happy.reScale(1.1).visible = false
        this.faceSet.sad.reScale(1.1).visible = false

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
        this.swapFace('happy')
        this.isWrong.visible = false
        this.isRight.visible = true
        this.timer = setTimeout(()=>{
            this.isRight.visible = false
            this.swapFace('normal')        
    }
            , 1000)
    }

    wrongAnswer(){
        clearTimeout(this.timer)
        this.wrongSound.play()
        this.swapFace('sad')
        this.isRight.visible = false
        this.isWrong.visible = true
        this.timer = setTimeout(()=>{
            this.isWrong.visible = false
            this.swapFace('normal')        
        }, 1000)
    }

    swapFace(emotion){
        Object.keys(this.faceSet).forEach((key)=> {
            this.faceSet[key].visible = false
        })
        this.faceSet[emotion].visible = true
    }

    onDestroyHandler(){
        this.rightSound.destroy()
        this.wrongSound.destroy()
    }
}