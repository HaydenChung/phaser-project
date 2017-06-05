import Phaser from 'phaser'
import Begin from '../sprites/Begin'
import config from '../config'
import Bread from '../sprites/Bread'

import ReGroup from '../groups/ReGroup'



export default class RollingDragable extends ReGroup{
    constructor({game, x, y, spriteBlock, displayElm, matcherElm, showType=false,parentCallback = {}, actions}){
        super(game, x,  y, actions)

        this.customState = {
            startY: y,
            parentCallback,
            dragging: false,
            offTrack: false,
            displayElm,
            matcherElm
        }

        this.dragStartHandler = this.dragStartHandler.bind(this)
        this.dragStopHandler = this.dragStopHandler.bind(this)

        this.spriteBlock = typeof spriteBlock != 'undefined' ? this.add(new spriteBlock({game: game, x: 0, y: 0})): this.add(new Bread({game: game, x: 0, y: 0}))

        const onDisplay = showType === true ? this.customState.matcherElm : this.customState.displayElm 

        this.textBlock = game.add.text(
            0, 0, displayElm,
            { font: 'bold 20pt DFYuan-Md-HK-BF,LiHei Pro Medium,Microsoft JhengHei', fill: '#4B3A2F', align: 'center'}, this
        )
        this.textBlock.anchor.setTo(.5)
        this.textBlock.scale.setTo(config.scaleRate)

        this.graphics = game.add.graphics(0, 0, this)
        this.graphics.lineStyle(0)
        this.graphics.beginFill(0xFFFFFF, 1)
        this.graphics.fillAlpha = .8
        this.graphics.drawRoundedRect(-this.textBlock.width*1.1/2, -this.textBlock.height/2, this.textBlock.width*1.1, this.textBlock.height, 10)


        this.bringToTop(this.textBlock)

        this.spriteBlock.inputEnabled = true;

        this.spriteBlock.input.enableDrag(true)
        this.spriteBlock.events.onDragUpdate.add((sprite, pointer, dragX, dragY, snapPoint)=>{
            this.textBlock.x = dragX
            this.textBlock.y = dragY
            this.graphics.x = dragX
            this.graphics.y = dragY
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
        const result = this.customState.parentCallback.itemDropHandler(this )
        this.spriteBlock.position.setTo(0)
        this.textBlock.position.setTo(0)
        this.graphics.position.setTo(0)
        if(result === null){
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
}