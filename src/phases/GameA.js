import Phase from './Phase'
import RollingDragable from '../groups/RollingDragable'
import config from '../config'

export default class GameA extends Phase{
    constructor({sources}){
        super('')
        this.sources = sources;

    }
    preload(){
        // this.sources.forEach((source)=> {

        // })
    }

    create(){

        this.returnButton = this.add.text(50*config.scaleRate, 50*config.scaleRate, "Return To Home Screen", { font: 'bold 20pt Arial', fill: 'white', align: 'left'})
        this.returnButton.scale.setTo(config.scaleRate)
        this.returnButton.inputEnabled = true;
        this.returnButton.events.onInputDown.add(()=> this.state.start('HomeScreen'))

        this.newTest = new RollingDragable({
            game: this,
            x: 100, y: this.world.centerY, text: this.sources[0].name,
        })
        this.add.existing(this.newTest)
    }

    update(){
        if(this.newTest.dragging == false) this.newTest.x += 2;
    }



}