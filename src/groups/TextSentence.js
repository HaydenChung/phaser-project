import ReGroup from './ReGroup'
import config from '../config'

export default class TextSentence extends ReGroup {
    constructor({
        game, x, y, text='', textSize=20, type,
        backgroundColor='white', lastLineLength, showText = true, 
        draggable = false, parentCallback = {}, actions, rectBackground = false
    }){
        super(game, x, y, actions)

        this.customState = {
            style: { font: 'normal DFYuan-Md-HK-BF,LiHei Pro Medium,Microsoft JhengHei',  fontSize: textSize, fill: '#000000', align:'left', tabs: [textSize*2, 0]},
            typeStyle: { font: 'normal DFYuan-Md-HK-BF,LiHei Pro Medium,Microsoft JhengHei',  fontSize: textSize, fill: '#008000', align:'left'},
            dragging: false,
            offTrack: false,
            parentCallback,
            text,
            graphicsDefPos: {x,y},
            type
        }

        this.sentence = game.add.text(
            0, 0, text, this.customState.style, this
        )

        this.sentence.anchor.setTo(.5)

        this.customState.graphicsDefPos = {x:-this.sentence.width/2,y:-this.sentence.height/2}

        const gPosX = this.customState.graphicsDefPos.x,
        gPosY = this.customState.graphicsDefPos.y

        if(draggable){
            this.sentence.inputEnabled = true
            this.sentence.input.enableDrag(true)
            this.sentence.events.onDragUpdate.add((sprite, pointer, dragX, dragY, snapPoint)=>{
                graphics.x = dragX+gPosX
                graphics.y = dragY+gPosY
            })
            this.sentence.events.onDragStart.add(this.dragStartHandler, this)
            this.sentence.events.onDragStop.add(this.dragStopHandler, this)
            this.sentence.events.onInputOver.add(this.inputOverHandler, this)
            this.sentence.events.onInputOut.add(this.inputOutHandler, this)
        }

        let graphics = game.add.graphics(gPosX, gPosY, this)
            if(rectBackground == false){
            graphics.lineStyle(0)
            graphics.beginFill(backgroundColor, 1)
            graphics.drawRect(0, textSize+(textSize/4), this.sentence.width, this.sentence.height - (textSize+10)*2)
            
            graphics.moveTo(textSize*2 ,textSize/5*3)
            graphics.lineStyle(textSize+15, backgroundColor, 1)
            graphics.lineTo(this.sentence.width, textSize/5*3)

            graphics.moveTo(0 ,this.sentence.height - textSize)
            graphics.lineTo(textSize*lastLineLength, this.sentence.height - textSize)
        }else{
            graphics.lineStyle(0)
            graphics.beginFill(backgroundColor, 1)
            graphics.drawRect(0, 0, this.sentence.width, this.sentence.height)
        }

        this.backgroundField = graphics
        
        if(showText){
            this.bringToTop(this.sentence)
        }else{
            this.textType = game.add.text(
                0, -this.sentence.height/2, this.customState.type, this.customState.typeStyle, this
            )
            this.bringToTop(this.textType)
        }
        this.scale.setTo(config.scaleRate)
        
    }

    dragStartHandler(){
        this.customState.dragging = true
        this.scale.setTo(1.5*config.scaleRate)
        this.parent.bringToTop(this)
    }

    dragStopHandler(){
        this.parent.sendToBack(this)
        const result = this.customState.parentCallback.itemDropHandler(this)
        this.scale.setTo(config.scaleRate)
        if(result === true){
            this.customState.offTrack = true;
            this.destroy();
            return
        }
        this.sentence.position.setTo(0)
        this.backgroundField.position.setTo(this.customState.graphicsDefPos.x, this.customState.graphicsDefPos.y)
        this.customState.dragging = false
    }

    inputOverHandler(){
        this.parent.bringToTop(this)
        this.scale.setTo(1.5*config.scaleRate)
    }

    inputOutHandler(){
        this.parent.sendToBack(this)
        this.scale.setTo(config.scaleRate)
    }

    rectBackground(color='lightblue'){
        this.backgroundField.exists = false
        this.sentence.setStyle({backgroundColor:color})
    }
}