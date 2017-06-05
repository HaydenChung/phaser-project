import ReGroup from './ReGroup'
import ReSprite from '../sprites/ReSprite'

export default class ReturnButton extends ReGroup {
    constructor({game, x, y, actions, displayElm='', inputHandler=()=>{}}){
        super(game, x, y, actions)

        this.spriteBlock = this.add(new ReSprite(this.game, 0, 0, 'backBtn'))
        this.spriteBlock.anchor.setTo(.5)
        this.spriteBlock.inputEnabled = true;
        this.spriteBlock.events.onInputDown.add(()=> game.state.start('HomeScreen'))
        this.spriteBlock.events.onInputOver.add(this.inputOverHandler, this)
        this.spriteBlock.events.onInputOut.add(this.inputOutHandler, this)
    }

    inputOverHandler(){
        this.spriteBlock.scale.setTo(this.spriteBlock.scale.x*1.1,this.spriteBlock.scale.y*1.1)
    }

    inputOutHandler(){
        this.spriteBlock.scale.setTo(this.spriteBlock.scale.x/1.1,this.spriteBlock.scale.y/1.1)
    }
}