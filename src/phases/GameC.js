import Phase from './Phase'
import Basket from '../groups/Basket'
import config from '../config'

import GameA_Track from '../groups/GameA_Track'

export default class GameC extends Phase{
    // init(){
    //     this.stage.backgroundColor = "#FFFFFF"
    // }

    create(){

        this.returnButton = this.add.text(50*config.scaleRate, 50*config.scaleRate, "Return To Home Screen", { font: 'bold 20pt Arial', fill: 'red', align: 'left'})
        this.returnButton.scale.setTo(config.scaleRate)
        this.returnButton.inputEnabled = true;
        this.returnButton.events.onInputDown.add(()=> this.state.start('HomeScreen'))

        this.machine = new GameA_Track({game: this.game, x:0, y: this.world._height/3*1})


        // this.sources.items.forEach((source, index)=>{
        //     let newSprite = new Basket({game:this, x:10, y:index*20, typeName:source.name })
        //     this.add.tween(newSprite).to({x:this.world._width}, 3000, Phaser.Easing.Linear.None, true)
        // })


    }
}