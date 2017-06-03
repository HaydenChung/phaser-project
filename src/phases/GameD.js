import Phase from './Phase'
import Basket from '../groups/Basket'
import config from '../config'
import TimeCounter from '../groups/Countdown'
import Baker from '../groups/Baker'
import ReSprite from '../sprites/ReSprite'
import Title from '../groups/Title'

export default class GameC extends Phase{
    init(){
        this.stage.backgroundColor = "#FFFFFF"
    }

    create(){

        this.returnButton = this.add.text(50*config.scaleRate, 50*config.scaleRate, "Return To Home Screen", { font: 'bold 20pt Arial', fill: 'red', align: 'left'})
        this.returnButton.scale.setTo(config.scaleRate)
        this.returnButton.inputEnabled = true;
        this.returnButton.events.onInputDown.add(()=> this.state.start('HomeScreen'))

        new Title({game: this.game, x:this.game.world.centerX, y:this.game.world.centerY, text:'麵包包裝工場', colorHex: '0172bd'})
    }

    update(){
        // this.itemList.forEach((item)=> item.x += 5)
    }
}