import Phase from './Phase'
import config from '../config'

import Congratulation from '../groups/Congratulation'
import ReturnButton from '../groups/ReturnButton'
import Headline from '../groups/Headline'

export default class BillBoard extends Phase{

    init({score}={score:0}){
        this.sources.score = score
    }
    create(){
        new Congratulation({game: this.game, x:this.world.centerX, y:this.world.centerY, baseColor:0x9242f4, text:`Your score is \n${this.sources.score}`})
        new ReturnButton({game: this.game, x:config.widthGrid * 9, y:config.heightGrid})
        new Headline({game: this.game, x:0, y:0})
    }
}