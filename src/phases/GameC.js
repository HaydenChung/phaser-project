import Phase from './Phase'
import config from '../config'

import TextSentence from '../groups/TextSentence'

import {shuffle} from '../functions'

export default class GameC extends Phase{

    preload(){
        this.privateElmts = {
            
        }
        let wrapWidth = 750*config.scaleRate
        this.customState = {
            breakLine: 20,
            textGroup: JSON.parse(JSON.stringify(this.sources))
        }

        this.customState.textGroup.forEach((group)=> {
            group.items = group.items.map((item)=> {
                return this.textResort(item)
            })
        })

        this.textResort = this.textResort.bind(this)
    }

    create(){

        this.returnButton = this.add.text(50*config.scaleRate, 50*config.scaleRate, "Return To Home Screen", { font: 'bold 20pt Arial', fill: 'red', align: 'left'})
        this.returnButton.scale.setTo(config.scaleRate)
        this.returnButton.inputEnabled = true;
        this.returnButton.events.onInputDown.add(()=> this.state.start('HomeScreen'))

        this.textElm = {
            original:[],
            random:[]
        }

        let textMargin = 30*config.scaleRate,
        rtextMargin = textMargin

        const randomOrder = shuffle(Object.keys(this.customState.textGroup[4].items))

        this.customState.textGroup[4].items.forEach((item, index)=>{
            this.textElm.original.push(
                new TextSentence({
                    game: this.game, x: this.world._width/3*2, y: textMargin, showText: false, 
                    text: item.text, backgroundColor: 0xA37575, textSize: 30, lastLineLength: item.lastLineLength
                })
            )
            this.textElm.random.push(
                new TextSentence({
                    game: this.game, x: this.world._width/3, y: rtextMargin, draggable: true,
                    text: this.customState.textGroup[4].items[randomOrder[index]].text, backgroundColor: 0xA37575, textSize: 30, lastLineLength: this.customState.textGroup[4].items[randomOrder[index]].lastLineLength
                })
            )
            textMargin += this.textElm.original[this.textElm.original.length-1].height+10
            rtextMargin += this.textElm.random[this.textElm.random.length-1].height+10
        })


    }

    textResort(text){
        const incNum = this.customState.breakLine
        let index = incNum -2

        text = '\t'+text
        while(text[index]){
            text = text.slice(0, index)+'\n'+text.slice(index)
            index += incNum
        }

        const lastLineLength = text.length-(index-incNum+1)

        return {text, lastLineLength}
    }
}