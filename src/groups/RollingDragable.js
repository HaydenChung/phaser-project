import Phaser from 'phaser'
import Begin from '../sprites/Begin'
import config from '../config'

export default class RollingDragable extends Phaser.Group{
    constructor({game, x, y, spriteBlock, text, itemType, parentCallback = {}}){
        super(game)

        this.customState = {
            startY: y,
            parentCallback: parentCallback,
            dragging: false,
            itemType: itemType,
            offTrack: false
        }

        this.x = x
        this.y = y

        this.dragStartHandler = this.dragStartHandler.bind(this)
        this.dragStopHandler = this.dragStopHandler.bind(this)
        this.checkOverlap = this.checkOverlap.bind(this)

        this.spriteBlock = this.add(spriteBlock|| new Begin({game: game, x: 0, y: 0}))

        this.textBlock = game.add.text(
            0, 0, text,
            { font: 'bold 20pt Arial', fill: 'white', align: 'left'}, this
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
        this.game.world.bringToTop(this)
    }

    dragStopHandler(){
        this.game.world.sendToBack(this)
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

    checkOverlap(targetSprite) {
        return Phaser.Rectangle.intersects(this.spriteBlock.getBounds(), targetSprite.getBounds())
    }
}