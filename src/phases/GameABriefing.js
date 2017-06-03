import Phase from './Phase'
import config from '../config'
import ReGroup from '../groups/ReGroup'
import ClickableBread from '../groups/ClickableBread'
import Headline from '../groups/Headline'
import Title from '../groups/Title'

export default class Briefing extends Phase{
    preload(){
        this.bg = this.game.add.sprite(0, 0, 'bg_1_3')
        this.bg.height = this.world.height
        this.bg.width = this.world.width

        this.customState = {
            itemMargin: config.widthGrid*0.8
        }
    }

    create(){

        this.container = new ReGroup(this.game, config.widthGrid, config.heightGrid*2)

        let graphics = this.game.add.graphics(0, 0)
        graphics.beginFill(0xfffced)
        graphics.lineStyle(config.widthGrid/4, 0xba9d75, 1)
        graphics.drawRoundedRect(0 , 0, config.widthGrid*8, config.heightGrid*7, 30)

        this.container.add(graphics)

        this.container.add(new Title({game: this.game, x:this.container.width/2, y:this.container.height/6, text:'請選擇題目', colorHex: 'e1a35e'}))

        this.sources.items.forEach((group, index)=>{
            this.container.add(new ClickableBread({
                game: this.game, 
                x: this.container.width/6*((index%5)+1), 
                y: this.container.height/6*((Math.ceil((index+1)/5))+1), 
                displayElm:index+1,
                inputHandler: this.state.start.bind(this.state ,'GameA', true, false,{groupIndex:index})
            }))
        })

        new Headline({game: this.game, x:0, y:0, gameName:'GameA'})

        this.returnButton = this.add.text(config.widthGrid/2, config.heightGrid/2, "Return To Home Screen", { font: 'bold 20pt Arial', fill: 'red', align: 'left'})
        this.returnButton.scale.setTo(config.scaleRate)
        this.returnButton.inputEnabled = true;
        this.returnButton.events.onInputDown.add(()=> this.state.start('HomeScreen'))
    }
}