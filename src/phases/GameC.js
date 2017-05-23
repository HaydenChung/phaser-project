import Phase from './Phase'
import config from '../config'

import TextSentence from '../groups/TextSentence'
import Baker from '../groups/Baker'
import Headline from '../groups/Headline'

import GameC_container from '../groups/GameC_container'

import { shuffle } from '../functions'
import { mouseOverlap } from '../actions/collisionCheck'

export default class GameC extends Phase{

    init({groupIndex}={groupIndex:0}){
        this.customState = {
            groupIndex,
            breakLine: 26,
            itemsCount: this.sources.length,
            sectionOneItemCount: 4,
            collectedCount: 0,
            gameMark: 0,
            textSize: 30
        }
        this.customState.textGroup= JSON.parse(JSON.stringify(this.sources[this.customState.groupIndex]))
    }

    preload(){

        this.customState.textGroup = this.customState.textGroup.items.map((item)=>{
            return this.textResort(item)
        })

        this.bg = this.game.add.sprite(0, 0, 'bg_1_3')
        this.bg.height = this.world.height
        this.bg.width = this.world.width

        this.textResort = this.textResort.bind(this)
        this.sectionOneDropHandler = this.sectionOneDropHandler.bind(this)
        this.swapSection = this.swapSection.bind(this)
    }

    create(){

        new Headline({game: this.game, x:0, y:0})

        this.returnButton = this.add.text(50*config.scaleRate, 50*config.scaleRate, "Return To Home Screen", { font: 'bold 20pt Arial', fill: 'red', align: 'left'})
        this.returnButton.scale.setTo(config.scaleRate)
        this.returnButton.inputEnabled = true;
        this.returnButton.events.onInputDown.add(()=> this.state.start('HomeScreen'))

        this.baker = new Baker({game: this.game, x:this.world.width/10, y:this.world.height, asset:'character_0', reversalBubble:true})

        this.targetContainer = new GameC_container({game: this.game, x:this.world.width/10*8, y:this.world.height/5})
        this.selectContainer = new GameC_container({game: this.game, x:this.world.width/10*4, y:this.world.height/5})

        let textMargin = 0,
        rtextMargin = 0

        const randomOrder = shuffle(Object.keys(this.customState.textGroup))

        this.customState.textGroup.forEach((item, index)=>{
            this.targetContainer.add(
                new TextSentence({
                    game: this.game, x: 0, y: textMargin, showText: false, type: item.type,
                    text: item.text, backgroundColor: 0xA37575, textSize: this.customState.textSize, lastLineLength: item.lastLineLength
                })
            )
            this.selectContainer.add(
                new TextSentence({
                    game: this.game, x: 0, y: rtextMargin, type: this.customState.textGroup[randomOrder[index]].type,
                    draggable: true, actions:{mouseOverlap}, parentCallback:{itemDropHandler:this.sectionOneDropHandler},
                    text: this.customState.textGroup[randomOrder[index]].text,
                    backgroundColor: 0xA37575, textSize: this.customState.textSize,
                    lastLineLength: this.customState.textGroup[randomOrder[index]].lastLineLength
                })
            )
            rtextMargin += this.selectContainer.children[this.selectContainer.children.length-1].height
            textMargin += this.targetContainer.children[this.targetContainer.children.length-1].height
            this.selectContainer.children[this.selectContainer.children.length-1].y += this.selectContainer.children[this.selectContainer.children.length-1].height/2
            this.targetContainer.children[this.targetContainer.children.length-1].y += this.targetContainer.children[this.targetContainer.children.length-1].height/2
        })

    }

    textResort(item){
        const incNum = this.customState.breakLine
        let index = incNum -2

        let text = '\t'+item.text
        while(text[index]){
            text = text.slice(0, index)+'\n'+text.slice(index)
            index += incNum
        }

        const lastLineLength = text.length-(index-incNum+1)

        return {type:item.type ,text, lastLineLength}
    }

    sectionOneDropHandler(child){
        let result = null;
        let collectedCountLimiter = false;

        //array.some() will test every array's menber with the provided callback,
        //but stop when the callback return true
        this.targetContainer.children.some((target)=>{
            if(child.mouseOverlap(target)){
                if(collectedCountLimiter == false){
                    collectedCountLimiter = true
                }
                if(target.customState.type == child.customState.type){
                    this.customState.gameMark += 1/(this.customState.sectionOneItemCount)
                    target.bringToTop(target.sentence)
                    target.sendToBack(target.textType)
                    this.customState.collectedCount += 1
                    // this.scoreboard.change(this.customState.gameMark)
                    this.baker.rightAnswer()
                    return result = true;
                }
                result = false
            }
        })

        if(this.customState.collectedCount >= this.customState.sectionOneItemCount){
            //Begin section two
            setTimeout(this.swapSection,1000)
        }
        if(result === false) this.baker.wrongAnswer()
        return result;
    }

    swapSection(){
        this.state.start('GameC_sectionB', true, false, {groupIndex:this.customState.groupIndex})
    }
}