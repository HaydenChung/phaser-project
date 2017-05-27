import GameC from './GameC'
import config from '../config'

import TextSentence from '../groups/TextSentence'
import Baker from '../groups/Baker'
import Headline from '../groups/Headline'

import GameC_container from '../groups/GameC_container'

import { shuffle } from '../functions'
import { mouseOverlap } from '../actions/collisionCheck'

export default class GameC_B extends GameC{

    create(){
        new Headline({game: this.game, x:0, y:0})

        this.returnButton = this.add.text(50*config.scaleRate, 50*config.scaleRate, "Return To Home Screen", { font: 'bold 20pt Arial', fill: 'red', align: 'left'})
        this.returnButton.scale.setTo(config.scaleRate)
        this.returnButton.inputEnabled = true;
        this.returnButton.events.onInputDown.add(()=> this.state.start('HomeScreen'))

        this.baker = new Baker({game: this.game, x:this.world.width/10, y:this.world.height, charIndex: 0, reversalBubble:true})

        this.targetContainer = new GameC_container({game: this.game, x:this.world.width/10*8, y:this.world.height/5})
        this.selectContainer = new GameC_container({game: this.game, x:this.world.width/10*4, y:this.world.height/5})

        const randomOrder = shuffle(Object.keys(this.customState.textGroup))

        let textMargin = 0,
        rtextMargin = 0

        this.customState.textGroup.forEach((item, index)=>{
            this.targetContainer.add(
                new TextSentence({
                    game: this.game, x: 0, y: textMargin, showText: false, type: item.type,
                    text: item.text, backgroundColor: 0xf6f3e6, rectBackground: true,
                    textSize: this.customState.textSize, lastLineLength: item.lastLineLength
                })
            )
            this.selectContainer.add(
                new TextSentence({
                    game: this.game, x: 0, y: rtextMargin, type: this.customState.textGroup[randomOrder[index]].type,
                    draggable: true, actions:{mouseOverlap}, parentCallback:{itemDropHandler:this.itemDropHandler},
                    text: this.customState.textGroup[randomOrder[index]].text,
                    backgroundColor: 0xA37575, textSize: this.customState.textSize, rectBackground: true,
                    lastLineLength: this.customState.textGroup[randomOrder[index]].lastLineLength
                })
            )

            rtextMargin += this.selectContainer.children[this.selectContainer.children.length-1].height+5
            textMargin += this.targetContainer.children[this.targetContainer.children.length-1].height
            this.selectContainer.children[this.selectContainer.children.length-1].y += this.selectContainer.children[this.selectContainer.children.length-1].height/2
            this.targetContainer.children[this.targetContainer.children.length-1].y += this.targetContainer.children[this.targetContainer.children.length-1].height/2
            
        })

    }

    swapSection(){
        if(this.sources.length-1 > this.customState.groupIndex){
            this.state.start('GameC', true, false, {groupIndex:this.customState.groupIndex+1})
        }else{
            this.state.start('HomeScreen')
        }

    }

}