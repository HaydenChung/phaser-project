import Phase from './Phase'
import Basket from '../groups/Basket'
import config from '../config'
import TimeCounter from '../groups/Countdown'
import Baker from '../groups/Baker'
import ReSprite from '../sprites/ReSprite'
import Title from '../groups/Title'
import ReturnButton from '../groups/ReturnButton'
import Congratulation from '../groups/Congratulation'


export default class GameC extends Phase{
    init(){
        this.stage.backgroundColor = "#FFFFFF"
    }

    create(){

        new ReturnButton({game: this.game, x:config.widthGrid * 9, y:config.heightGrid})

        new Congratulation({game: this.game, x:this.game.world.centerX, y:this.game.world.centerY, baseColor: 0x4286f4})
    }

    update(){
        // this.itemList.forEach((item)=> item.x += 5)
    }
}