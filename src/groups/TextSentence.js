import ReGroup from './ReGroup'
import config from '../config'

export default class TextSentence extends ReGroup {
    constructor({game, x, y, text='', textSize=20, backgroundColor='white', lastLineLength, showText = true, draggable = false}){
        super(game, x, y)

        this.customState = {
            style: { font: 'normal LiHei Pro Medium,Microsoft JhengHei',  fontSize: textSize, fill: '#A3A375', align:'left', tabs: [textSize*2, 0]},
            dragging: false,
            offTrack: false            
        }

        this.sentence = game.add.text(
            0, 0, text, this.customState.style, this
        )

        this.dragStartHandler = this.dragStartHandler.bind(this)
        this.dragStopHandler = this.dragStopHandler.bind(this)

        if(draggable){
            this.sentence.inputEnabled = true
            this.sentence.input.enableDrag(true)
            this.sentence.events.onDragUpdate.add((sprite, pointer, dragX, dragY, snapPoint)=>{
                graphics.x = dragX
                graphics.y = dragY
            })
            this.sentence.events.onDragStart.add(this.dragStartHandler)
            this.sentence.events.onDragStop.add(this.dragStopHandler)
        }
        let graphics = game.add.graphics(0, 0)
        graphics.lineStyle(0)
        graphics.beginFill(backgroundColor, 1)
        graphics.drawRect(0, textSize+(textSize/4), this.sentence.width, this.sentence.height - (textSize+10)*2)
        
        graphics.moveTo(textSize*2 ,textSize/5*3)
        graphics.lineStyle(textSize+10, backgroundColor, 1)
        graphics.lineTo(this.sentence.width, textSize/5*3)

        graphics.moveTo(0 ,this.sentence.height - textSize)
        graphics.lineTo(textSize*lastLineLength, this.sentence.height - textSize)

        this.add(graphics)

        this.backgroundField = graphics
        
        if(showText) this.bringToTop(this.sentence)
        this.scale.setTo(config.scaleRate)
        
    }

    dragStartHandler(){
        this.customState.dragging = true
        // this.game.world.bringToTop(this)
    }

    dragStopHandler(){
        // this.game.world.sendToBack(this)
        const result = this.customState.parentCallback.itemDropHandler(this )
        this.sentence.position.setTo(0)
        this.backgroundField.position.setTo(0)
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