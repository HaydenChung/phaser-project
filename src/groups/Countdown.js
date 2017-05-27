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

        this.strokeText = this.game.add.text(0, 0, seconds, {font:`${this.customState.fontSize}px Arial Black`, fill:"#c51b7d"}, this)
        this.strokeText.stroke = "#de77ae"
        this.strokeText.strokeThickness = 16
        this.strokeText.setShadow(2, 2, "#333333", 2, true, true)
        this.strokeText.anchor.setTo(.5)
        this.strokeText.scale.setTo(config.scaleRate)

        this.countSound = game.add.audio('buttonClick')
        this.startSound = game.add.audio('startGame')

        this.timer = game.time.create()
        this.timer.loop(1000, this.updateText, this)
        this.timer.start()

        this.onDestroyHandler = this.onDestroyHandler.bind(this)

        this.onDestroy.add(this.onDestroyHandler, this)
    }

    updateText(){
        if(!--this.strokeText.text){
            this.startSound.play()
            this.timer.stop(true)
            this.customState.callback()
            setTimeout(this.destroy.bind(this),200)
            return
        }
        this.countSound.play()
    }

    onDestroyHandler(){
        this.countSound.destroy()
        this.startSound.destroy()
    }
}