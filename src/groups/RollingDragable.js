import Phaser from 'phaser'
import Begin from '../sprites/Begin'
import config from '../config'
import Bread from '../sprites/Bread'

export default class RollingDragable extends Phaser.Group{
    constructor({game, x, y, spriteBlock, text, itemType, parentCallback = {}}){
        super(game)

        this.customState = {
            startY: y,
            parentCallback: parentCallback,
            dragging: false,
            offTrack: false,
            itemType: itemType,
        }

        this.x = x
        this.y = y

        this.dragStartHandler = this.dragStartHandler.bind(this)
        this.dragStopHandler = this.dragStopHandler.bind(this)
        this.checkOverlap = this.checkOverlap.bind(this)

        this.spriteBlock = typeof spriteBlock != 'undefined' ? this.add(new spriteBlock({game: game, x: 0, y: 0})): this.add(new Bread({game: game, x: 0, y: 0}))

        this.textBlock = game.add.text(
            0, 0, text,
            { font: 'bold 20pt Arial', fill: '#4B3A2F', align: 'left', backgroundColor:'rgba(255, 255, 255, 0.5)'}, this
        )
        this.textBlock.anchor.setTo(.5)
        this.textBlock.scale.setTo(config.scaleRate)

        this.spriteBlock.inputEnabled = true;

        this.spriteBlock.input.enableDrag(true)
        this.spriteBlock.events.onDragUpdate.add((sprite, pointer, dragX, dragY, snapPoint)=>{
            this.textBlock.x = dragX
            this.textBlock.y = dragY
        })
        this.spriteBlock.events.onDragStart.add(this.dragStartHandler)
        this.spriteBlock.events.onDragStop.add(this.dragStopHandler)
    }

    dragStartHandler(){
        this.customState.dragging = true
        // this.game.world.bringToTop(this)
    }

    dragStopHandler(){
        // this.game.world.sendToBack(this)
        const result = this.customState.parentCallback.itemDropHandler(this, this.checkOverlap)
        if(result === null){
            this.spriteBlock.position.setTo(0)
            this.textBlock.position.setTo(0)
            this.customState.dragging = false
            return
        }
        if(result === false){
            this.customState.offTrack = true;
            this.destroy();
        }
        this.customState.offTrack = true;
        this.spriteBlock.inputEnabled = false;
    }

    checkOverlap(target) {
        return Phaser.Rectangle.contains( target.getBounds(), this.game.input.x, this.game.input.y)
    }
}