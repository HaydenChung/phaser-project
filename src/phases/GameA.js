import Phase from './Phase'

import RollingDragable from '../groups/RollingDragable'
import Protal from '../sprites/Protal'
import Scoreboard from '../groups/Scoreboard'
import Basket from '../groups/Basket'
import Headline from '../groups/Headline'
import GameA_Track from '../groups/GameA_Track'
import GameA_Box from '../groups/GameA_Box'

import config from '../config'
import { shuffle } from '../functions'

export default class GameA extends Phase{
    preload(){
        this.customState = {
            collectedCount: 0,
            leadingPosX: 0,
            moveOperator: 3* config.scaleRate,
            gameMark: 0,
            returnPoint: 0,
            itemsCount: 0,
            itemsDistance: []
        }

        this.bg = this.add.sprite(0, 0, 'bg_1_3')
        this.bg.height = this.world._height
        this.bg.width = this.world._width
        this.itemDropHandler = this.itemDropHandler.bind(this)
    }

    create(){

        new Headline({game:this, x:0, y:0})

        this.returnButton = this.add.text(50*config.scaleRate, 50*config.scaleRate, "Return To Home Screen", { font: 'bold 20pt Arial', fill: 'white', align: 'left'})
        this.returnButton.scale.setTo(config.scaleRate)
        this.returnButton.inputEnabled = true;
        this.returnButton.events.onInputDown.add(()=> this.state.start('HomeScreen'))

        this.scoreboard = new Scoreboard({game: this, x:this.world._width/6 * 5, y:this.world._height/8})
        
        this.sources.items = shuffle(this.sources.items)

        this.track = new GameA_Track({game: this, x:0, y: this.world._height/3*1})

        this.itemList = this.sources.items.map((source, index)=> {
            let currItem = new RollingDragable({game: this, x: -80*config.scaleRate, y: this.world.centerY, text: source.name, itemType: source.type, parentCallback:{itemDropHandler:this.itemDropHandler}})
            this.customState.itemsDistance.push(Math.round(index* currItem.width))
            return currItem
        })

        this.customState.itemsCount = this.itemList.length
        this.customState.returnPoint = this.customState.itemsCount* this.itemList[0].width + this.world._width

        this.box = new GameA_Box({game: this, x:0, y: this.world._height/3*1})

        const targetMargin = this.world._width/(this.sources.types.length+2);

        this.targetList = this.sources.types.map((source, index)=>{
            return new Basket({game: this, x: (index+1)* targetMargin, y: this.world._height-(140*config.scaleRate), typeName: source.name})
        })

        let breadTrain = this.add.tween(this.customState).to({leadingPosX:this.customState.returnPoint}, 50000, Phaser.Easing.Linear.None, true)

        breadTrain.loop()
        breadTrain.onLoop.add(()=>{
            this.itemList = this.itemList.filter((item)=>{
                return !item.customState.offTrack
            })
            this.customState.returnPoint = this.itemList.length* this.itemList[0].width + this.world._width
        })
    }

    update(){

        this.itemList.forEach((item, index)=> !item.customState.dragging ? item.x = this.customState.leadingPosX - this.customState.itemsDistance[index] : '' )

    }

    itemDropHandler(child, childCollisionCheck){
        let result = null;
        let collectedCountLimiter = false;
        this.targetList.forEach((target)=> {
            if(childCollisionCheck(target)){
                if(collectedCountLimiter== false){
                    collectedCountLimiter = true
                    this.customState.collectedCount += 1
                }
                if(target.customState.typeName == child.customState.itemType){
                    this.customState.gameMark += 1/(this.customState.itemsCount)
                    this.scoreboard.change(this.customState.gameMark)
                    return result = true;
                }
            result = false;
            }
        })
        if(this.customState.collectedCount >= this.customState.itemsCount){
            this.state.start('BillBoard', true, false, {score: Math.round(this.customState.gameMark*100)})
        }
        return result;
    }
}