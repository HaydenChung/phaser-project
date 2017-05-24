import Phase from './Phase'

import RollingDragable from '../groups/RollingDragable'
import Basket from '../groups/Basket'
import Headline from '../groups/Headline'
import ReGroup from '../groups/ReGroup'
import Baker from '../groups/Baker'
import Scoreboard from '../groups/Scoreboard'

import { mouseOverlap } from '../actions/collisionCheck'
import { shuffle } from '../functions'

import config from '../config'

export default class GameB_sectionB extends Phase{

    preload(){

        this.customState = {
            targetMargin: this.world.width/4,
            targetLocation: [{x:0,y:0},{x:1,y:0},{x:0,y:1},{x:1,y:1}],
            groupIndex: 0,
            gameMark: 0,
            itemsCount: this.sources.items.length,
        }

        this.sources.items = shuffle(this.sources.items)

        this.bg = this.game.add.sprite(0, 0, 'bg_1_3')
        this.bg.height = this.world.height
        this.bg.width = this.world.width

        this.itemDropHandler = this.itemDropHandler.bind(this)
        this.newBread = this.newBread.bind(this)
    }

    create(){

        new Headline({game: this.game, x:0, y:0})

        this.scoreboard = new Scoreboard({game: this.game, x:this.world.width/10 * 3, y:this.world.height/8})

        this.returnButton = this.add.text(50*config.scaleRate, 50*config.scaleRate, "Return To Home Screen", { font: 'bold 20pt Arial', fill: 'red', align: 'left'})
        this.returnButton.scale.setTo(config.scaleRate)
        this.returnButton.inputEnabled = true;
        this.returnButton.events.onInputDown.add(()=> this.state.start('HomeScreen'))

        this.targetContainer = new ReGroup(this.game, this.world.width/10*4, this.world.height/3)

        this.newBread()

        this.baker = new Baker({game: this.game, x: this.world.width/10*9, y: this.world.height, tagName:'麵包切割主管', asset: 'character_0'})

    }

    itemDropHandler(child){
        let result = null
        this.targetContainer.children.some((target)=>{
            if(child.mouseOverlap(target)){
                if(child.customState.matcherElm == target.customState.matcherElm){
                    target.addBread(child)
                    this.baker.rightAnswer()
                    this.customState.gameMark += 1/(this.customState.itemsCount)
                    this.scoreboard.change(this.customState.gameMark)
                    return result = true
                }
                result = false
            }
        })
        if(result === false) this.baker.wrongAnswer()
        if(result !== null) this.newBread()
        return result
    }

    newBread(){

        if(typeof this.bread != 'undefined'){
            this.bread.destroy()
            //phaser's destroy() function will remove the element immediately when invoke,
            //which make any for loop off gird,while loop is a better solution.
            while(typeof this.targetContainer.children[0] != 'undefined'){
                this.targetContainer.children[0].destroy()
            }
        }

        if(typeof this.sources.items[this.customState.groupIndex] == 'undefined'){
            this.state.start('BillBoard', true, false, {score: Math.round(this.customState.gameMark*100)})
            return
        }
        this.bread = new RollingDragable({
            game: this.game, x:-60, y:this.world.centerY,
            displayElm:this.sources.items[this.customState.groupIndex].text, matcherElm:this.sources.items[this.customState.groupIndex].index,
            parentCallback:{itemDropHandler:this.itemDropHandler}, actions:{mouseOverlap}
        })

        this.add.tween(this.bread).to({x: this.world.width/10}, 1000, Phaser.Easing.Linear.none, true)

        let randTargetArray = shuffle(Object.keys(this.sources.targets))
        let answerIncluded = false
        for(let i=0;i<4;i++){
            if(randTargetArray[i] === this.sources.items[this.customState.groupIndex].index){
                answerIncluded = true
                break;
            }
        }
        if(answerIncluded === false){
            randTargetArray.splice(Math.floor(Math.random()*4), 0, this.sources.items[this.customState.groupIndex].index)
        }
        randTargetArray = randTargetArray.slice(0,4)

        let currChild = 0

        randTargetArray.forEach((targetIndex)=>{
            this.targetContainer.add(
                new Basket({game: this.game, x:this.customState.targetLocation[currChild].x*this.customState.targetMargin, y:this.customState.targetLocation[currChild].y*this.customState.targetMargin, matcherElm: targetIndex, displayElm:this.sources.targets[targetIndex]})
            )
            currChild++
        })

        this.customState.groupIndex++
    }
}