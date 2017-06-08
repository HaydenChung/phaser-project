import Phase from './Phase'
import config from '../config'
import ReGroup from '../groups/ReGroup'
import ReSprite from '../sprites/ReSprite'
import ClickableBread from '../groups/ClickableBread'
import Headline from '../groups/Headline'
import Title from '../groups/Title'
import ReturnButton from '../groups/ReturnButton'

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

        new Headline({game: this.game, x:0, y:0})

        this.container = new ReGroup(this.game, config.widthGrid*0.05, config.heightGrid*0.1)

        this.container.add(new ReSprite(this.game, 0, 0, 'g1SelectBg'));

        this.container.add(new Title({game: this.game, x:this.container.width/2, y:this.container.height/8, text:'請選擇題目', colorHex: 'e1a35e'}))

        this.sources.items.forEach((group, index)=>{
            this.container.add(new ClickableBread({
                game: this.game, 
                x: this.container.width/6*((index%5)+1), 
                y: (this.container.height*.9)/5*((Math.ceil((index+1)/5)))+(this.container.height*.12), 
                displayElm:index+1,
                inputHandler: this.state.start.bind(this.state ,'GameA', true, false,{groupIndex:index})
            }))
        })



        new ReturnButton({game: this.game, x:config.widthGrid * 9, y:config.heightGrid})
    }
}