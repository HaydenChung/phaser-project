import ReGroup from './ReGroup'
import Bread from '../sprites/Bread'
import Tab from '../groups/Tab'

export default class ClickableBread extends ReGroup {
    constructor({game, x, y, actions, displayElm='', inputHandler=()=>{}}){
        super(game, x, y, actions)
        this.spriteBlock = this.add(new Bread({game, x:0, y:0}))

        this.tab = this.add(new Tab({game, x:0, y:0, text:displayElm}))

        this.spriteBlock.reScale(.9);
        this.spriteBlock.inputEnabled = true
        this.spriteBlock.input.useHandCursor = true
        this.spriteBlock.events.onInputUp.add(inputHandler)
        this.spriteBlock.events.onInputOver.add(this.inputOverHandler, this)
        this.spriteBlock.events.onInputOut.add(this.inputOutHandler, this)
    }

    inputOverHandler(){
        this.spriteBlock.scale.setTo(this.spriteBlock.scale.x*1.1,this.spriteBlock.scale.y*1.1)
        this.tab.scale.setTo(this.tab.scale.x*1.1,this.tab.scale.y*1.1)
    }

    inputOutHandler(){
        this.spriteBlock.scale.setTo(this.spriteBlock.scale.x/1.1,this.spriteBlock.scale.y/1.1)
        this.tab.scale.setTo(this.tab.scale.x/1.1,this.tab.scale.y/1.1)
    }
}