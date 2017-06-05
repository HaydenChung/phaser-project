import Phaser from 'phaser'
import Begin from '../sprites/Begin'
import config from '../config'

export default class MenuButton extends Phaser.Group {
    constructor({game, x, y, spriteBlock, text, inputUpCallback=()=>{}}){
        super(game)
        this.x = x;
        this.y = y;

        this.spriteBlock = typeof spriteBlock != 'undefined' ? this.add(spriteBlock) : this.add(new Begin({game: game, x: 0, y: 0}))

        this.textBlock = game.add.text(
            0, 0, text,
            { font: 'bold 20pt DFYuan-Md-HK-BF', fill: 'white', align: 'left'}, this
        )
        this.textBlock.anchor.setTo(.5)
        this.textBlock.scale.setTo(config.scaleRate)

        this.inputUpCallback = inputUpCallback;
        this.inputUpHandler = this.inputUpHandler.bind(this)
        this.inputOverHandler = this.inputOverHandler.bind(this)
        this.inputOutHandler = this.inputOutHandler.bind(this)

        this.spriteBlock.inputEnabled = true;
        this.spriteBlock.events.onInputUp.add(this.inputUpHandler, this)
        this.spriteBlock.events.onInputOver.add(this.inputOverHandler, this)
        this.spriteBlock.events.onInputOut.add(this.inputOutHandler, this)
    }

    inputUpHandler(){
        this.inputUpCallback()
    }

    inputOverHandler(){
        this.spriteBlock.scale.setTo(this.spriteBlock.scale.x*1.1,this.spriteBlock.scale.y*1.1)
        this.textBlock.scale.setTo(this.textBlock.scale.x*1.1,this.textBlock.scale.y*1.1)
    }

    inputOutHandler(){
        this.spriteBlock.scale.setTo(this.spriteBlock.scale.x/1.1,this.spriteBlock.scale.y/1.1)
        this.textBlock.scale.setTo(this.textBlock.scale.x/1.1,this.textBlock.scale.y/1.1)
    }
}