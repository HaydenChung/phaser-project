import Phase from './Phase'

import RollingDragable from '../groups/RollingDragable'
import Scoreboard from '../groups/Scoreboard'
import Basket from '../groups/Basket'
import Headline from '../groups/Headline'
import GameA_Track from '../groups/GameA_Track'
import GameA_Box from '../groups/GameA_Box'
import Baker from '../groups/Baker'
import Countdown from '../groups/Countdown'
import Title from '../groups/Title'
import ReturnButton from '../groups/ReturnButton'

import Protal from '../sprites/Protal'
import Character from '../sprites/Character'

import config from '../config'
import { shuffle } from '../functions'
import { mouseOverlap } from '../actions/collisionCheck'
import { textResort } from '../actions/textManagement'

export default class GameA extends Phase{
    init({groupIndex}){
        this.customState = {
            collectedCount: 0,
            leadingPosX: 0,
            moveOperator: 3* config.scaleRate,
            gameMark: 0,
            returnPoint: 0,
            itemsCount: 0,
            itemsDistance: [],
            groupIndex: groupIndex|0
        }
    }

    preload(){

        this.bg = this.game.add.sprite(0, 0, 'bg_1_3')
        this.bg.height = this.world.height
        this.bg.width = this.world.width
        this.itemDropHandler = this.itemDropHandler.bind(this)
        this.breadTrain = this.breadTrain.bind(this)

    }

    create(){

        this.bgMusic = this.add.audio('bgMusic', .6, true).play()

        new GameA_Track({game: this.game, x:0, y: this.world.height/3*1})        

        const targetMargin = this.world.width/(this.sources.types.length+2);
        this.targetList = this.sources.types.map((source, index)=>{
            return new Basket({game: this.game, x: (index+1)* targetMargin, y: this.world.height-(140*config.scaleRate), matcherElm: source.name, displayElm: source.name})
        })

        this.sources.items[this.customState.groupIndex] = shuffle(this.sources.items[this.customState.groupIndex])
        this.itemList = this.sources.items[this.customState.groupIndex].map((source, index)=> {
            let currItem = new RollingDragable({actions:{mouseOverlap}, game: this.game, x: -80*config.scaleRate, y: this.world.centerY, displayElm: source.name, matcherElm: source.type, parentCallback:{itemDropHandler:this.itemDropHandler}})
            currItem.scale.setTo(1.3)
            this.customState.itemsDistance.push(Math.round(index* currItem.width))
            return currItem
        })

        this.customState.itemsCount = this.itemList.length
        this.customState.returnPoint = this.customState.itemsCount* this.itemList[0].width + this.world.width
        
        this.scoreboard = new Scoreboard({game: this.game, x:config.widthGrid * 7, y:this.world.height/8})

        this.baker = new Baker({game: this.game, x:this.world.width - targetMargin ,y: this.world.height, tagName:'麵包分發員', charIndex:0})
        this.baker.scale.setTo(.9)
        new GameA_Box({game: this.game, x:0, y: this.world.height/3*1.01})

        this.title = new Title({game: this.game, x:config.widthGrid * 3, y:config.heightGrid*1.2, text:"麵包配送中心", colorHex: "f7941f"})

        new Countdown({game: this.game, x: this.game.world.centerX, y: this.game.world.centerY, seconds: 3, callback: this.breadTrain})
        new Headline({game: this.game, x:0, y:0, gameName:'GameA'})

        new ReturnButton({game: this.game, x:config.widthGrid * 9, y:config.heightGrid})

    }

    update(){

        this.itemList.forEach((item, index)=> !item.customState.dragging ? item.x = this.customState.leadingPosX - this.customState.itemsDistance[index] : '' )

    }

    itemDropHandler(child){
        let result = null;
        let collectedCountLimiter = false;

        //array.some() will test every array's menber with the provided callback,
        //but stop when the callback return true
        this.targetList.some((target)=>{
            if(child.mouseOverlap(target)){
                if(collectedCountLimiter == false){
                    collectedCountLimiter = true
                    this.customState.collectedCount += 1
                }
                if(target.customState.matcherElm == child.customState.matcherElm){
                    target.addBread(child)
                    this.customState.gameMark += 1/(this.customState.itemsCount)
                    this.scoreboard.change(this.customState.gameMark)
                    this.baker.rightAnswer()
                    return result = true;
                }
                result = false
            }
        })

        if(this.customState.collectedCount >= this.customState.itemsCount){
            setTimeout(this.state.start.bind(this.state, 'BillBoard', true, false, {score: Math.round(this.customState.gameMark*100), textMessage: '恭喜!你已成為合格的 「麵\n包分發員」，並已初步掌握\n辨認文體。', title:"麵包配送中心"}),500)
        }
        if(result === false) this.baker.wrongAnswer()
        return result;
    }

    breadTrain(){
        this.add.tween(this.customState).to({leadingPosX:this.customState.returnPoint}, 12.5*this.customState.returnPoint/config.scaleRate, Phaser.Easing.Linear.None, true)
        .onComplete.add(()=>{
            this.itemList = this.itemList.filter((item)=>{
                return !item.customState.offTrack
            })
            this.customState.returnPoint = this.itemList.length* this.itemList[0].width + this.world.width
            this.customState.leadingPosX = 0
            this.breadTrain()
        })
    }

    shutdown(){
        this.bgMusic.destroy(true)
    }
}