import Phase from './Phase'
import config from '../config'

import Congratulation from '../groups/Congratulation'
import ReturnButton from '../groups/ReturnButton'
import Headline from '../groups/Headline'
import Title from '../groups/Title'

export default class BillBoard extends Phase{

    init({score,textMessage, title}={score:0, textMessage:'', title:'         '}){
        this.sources.score = score
        this.sources.textMessage = textMessage
        this.sources.title = title
    }
    create(){
        new Congratulation({game: this.game, x:this.world.centerX, y:this.world.centerY, baseColor:0x9242f4, score:`分數: ${this.sources.score}`, text: this.sources.textMessage})
        new Title({game: this.game, x: this.game.world.centerX, y: config.heightGrid*2, text:this.sources.title, colorHex: "f7941f"}).scale.setTo(1.2)
        new ReturnButton({game: this.game, x:config.widthGrid * 9, y:config.heightGrid})
        new Headline({game: this.game, x:0, y:0})
    }
}