import Phase from './Phase'
import config from '../config'

import Congratulation from '../groups/Congratulation'
import ReturnButton from '../groups/ReturnButton'
import Headline from '../groups/Headline'
import ReSprite from '../sprites/ReSprite'

export default class BillBoard extends Phase{

    init({score,textMessage, title}={score:0, textMessage:'', title:'         '}){
        this.sources.score = score
        this.sources.textMessage = textMessage
        this.sources.title = title
    }
    create(){

        this.bg = this.game.add.sprite(0, 0, 'bg_1_3')
        this.bg.height = this.world.height
        this.bg.width = this.world.width

        new Congratulation({game: this.game, x:this.world.centerX, y:this.world.centerY, baseColor:0x9242f4, score:`分數: ${this.sources.score}`, text: this.sources.textMessage, title:this.sources.title})
        this.game.add.existing(new ReSprite(this.game, config.widthGrid*8, this.world.height, 'winChar')).anchor.setTo(0.5, 1)
        new ReturnButton({game: this.game, x:config.widthGrid * 9, y:config.heightGrid})
        new Headline({game: this.game, x:0, y:0})
    }
}