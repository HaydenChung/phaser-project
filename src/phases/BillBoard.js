import Phase from './Phase'
import config from '../config'

export default class BillBoard extends Phase{

    init({score}){
        this.sources.score = score
    }
    create(){
        this.returnButton = this.add.text(50*config.scaleRate, 50*config.scaleRate, "Return To Home Screen", { font: 'bold 20pt Arial', fill: 'white', align: 'left'})
        this.returnButton.scale.setTo(config.scaleRate)
        this.returnButton.inputEnabled = true;
        this.returnButton.events.onInputDown.add(this.toNextPhase)

        this.gamerScore = this.add.text( this.world.centerX, this.world.centerY, `Your score is \n${this.sources.score}`,  { font: 'bold 20pt Arial', fill: 'red', align: 'left'})
        this.gamerScore.scale.setTo(config.scaleRate)
    }
}