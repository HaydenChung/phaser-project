import Phaser from 'phaser'
import Begin from '../sprites/Begin'
import config from '../config'

export default class RollingDragable extends Phaser.Group{
    constructor({game, x, y, spriteBlock, text, inputUpCallback=()=>{}}){
        super(game)
        this.x = x;
        this.y = y;


        this.dragStartHandler = this.dragStartHandler.bind(this)
        this.dragStopHandler = this.dragStopHandler.bind(this)

        this.dragging = false

        this.spriteBlock = this.add(spriteBlock|| new Begin({game: game, x: 0, y: 0}))

        this.textBlock = game.add.text(
            0, 0, text,
            { font: 'bold 20pt Arial', fill: 'white', align: 'left'}, this
        )
        this.textBlock.anchor.setTo(.5)
        this.textBlock.scale.setTo(config.scaleRate)

        // this.inputUpCallback = inputUpCallback;
        // this.inputUpHandler = this.inputUpHandler.bind(this)
        // this.inputOverHandler = this.inputOverHandler.bind(this)
        // this.inputOutHandler = this.inputOutHandler.bind(this)

        this.spriteBlock.inputEnabled = true;
        // this.spriteBlock.events.onInputUp.add(this.inputUpHandler, this)
        // this.spriteBlock.events.onInputOver.add(this.inputOverHandler, this)
        // this.spriteBlock.events.onInputOut.add(this.inputOutHandler, this)
        this.spriteBlock.input.enableDrag(true)
        this.spriteBlock.events.onDragUpdate.add((sprite, pointer, dragX, dragY, snapPoint)=>{
            // console.log(sprite, pointer, dragX, dragY, snapPoint)
            this.textBlock.x = dragX
            this.textBlock.y = dragY
        })
        this.spriteBlock.events.onDragStart.add(this.dragStartHandler)
        this.spriteBlock.events.onDragStop.add(this.dragStopHandler)
    }

    dragStartHandler(item){
        this.dragging = true
    }

    dragStopHandler(item){
        this.dragging = false
    }
}