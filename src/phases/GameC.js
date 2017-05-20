import Phase from './Phase'
import config from '../config'

import RollingDragable from '../groups/RollingDragable'

export default class GameC extends Phase{
    // init(){
    //     this.stage.backgroundColor = "#FFFFFF"
    // }

    preload(){
        this.privateElmts = {
            
        }
    }

    create(){

        this.returnButton = this.add.text(50*config.scaleRate, 50*config.scaleRate, "Return To Home Screen", { font: 'bold 20pt Arial', fill: 'red', align: 'left'})
        this.returnButton.scale.setTo(config.scaleRate)
        this.returnButton.inputEnabled = true;
        this.returnButton.events.onInputDown.add(()=> this.state.start('HomeScreen'))



    }
}