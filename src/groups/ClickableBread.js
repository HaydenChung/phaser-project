import ReGroup from './ReGroup'
import Bread from '../sprites/Bread'

export default class ClickableBread extends ReGroup {
    constructor({game, x, y, actions, displayElm='', inputHandler=()=>{}}){
        super(game, x, y, actions)
        this.spriteBlock = this.add(new Bread({game, x:0, y:0}))
        this.textBlock = game.add.text(
            0, 0, displayElm,
            { font: 'bold 20pt DFYuan-Md-HK-BF,LiHei Pro Medium,Microsoft JhengHei', fill: '#4B3A2F', align: 'center'}, this
        )

        this.textBlock.anchor.setTo(.5)

        this.spriteBlock.inputEnabled = true
        this.spriteBlock.input.useHandCursor = true
        this.spriteBlock.events.onInputUp.add(inputHandler)
        this.spriteBlock.events.onInputOver.add(this.inputOverHandler, this)
        this.spriteBlock.events.onInputOut.add(this.inputOutHandler, this)
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