import ReGroup from './ReGroup'
import config from '../config'

export default class Countdown extends ReGroup{
    constructor({game, x, y, seconds, fontSize, callback, backgroundColor}){
        super(game, x, y)

        this.customState = {
            callback:callback||(()=>{}),
            fontSize:fontSize|| game.world.height/2,
            backgroundColor:backgroundColor||'black'
        }

        this.updateText = this.updateText.bind(this)

        let graphics = game.add.graphics(-game.world.centerX, -game.world.centerY, this)
        graphics.lineStyle(0)
        graphics.beginFill(this.customState.backgroundColor, .3)
        graphics.drawRect(0, 0, game.world.width, game.world.height)
        graphics.inputEnabled = true;

        this.strokeText = this.game.add.text(0, 0, seconds, {font:`${this.customState.fontSize}px DFYuan-Md-HK-BF,LiHei Pro Medium,Microsoft JhengHei Black`, fill:"#4B3A2F"}, this)
        this.strokeText.stroke = "#ffffff"
        this.strokeText.strokeThickness = 58
        this.strokeText.setShadow(2, 2, "#333333", 2, true, true)
        this.strokeText.anchor.setTo(.5)
        this.strokeText.scale.setTo(config.scaleRate)

        this.countSound = game.add.audio('buttonClick')
        this.startSound = game.add.audio('startGame')

        this.timer = game.time.create()
        this.timer.loop(1000, this.updateText, this)
        this.timer.start()

        this.game.add.tween(this.strokeText.scale).to({x:.5*config.scaleRate,y:.5*config.scaleRate}, 1000, Phaser.Easing.Linear.none, true)

        this.onDestroyHandler = this.onDestroyHandler.bind(this)

        this.onDestroy.add(this.onDestroyHandler, this)
    }

    updateText(){
        this.strokeText.scale.setTo(config.scaleRate)
        if(!--this.strokeText.text){
            this.strokeText.text = '開始'
            this.startSound.play()
            this.timer.stop(true)
            setTimeout(()=>{
                this.customState.callback()
                this.destroy()
            },1000)
            return
        }
        this.game.add.tween(this.strokeText.scale).to({x:.5*config.scaleRate,y:.5*config.scaleRate}, 1000, Phaser.Easing.Linear.none, true)
        this.countSound.play()
    }

    onDestroyHandler(){
        this.countSound.destroy()
        this.startSound.destroy()
    }
}