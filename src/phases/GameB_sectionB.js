import Phase from './Phase'

import RollingDragable from '../groups/RollingDragable'
import Basket from '../groups/Basket'
import Headline from '../groups/Headline'
import ReGroup from '../groups/ReGroup'
import Baker from '../groups/Baker'
import Scoreboard from '../groups/Scoreboard'
import Countdown from '../groups/Countdown'
import GameB_container from '../groups/GameB_Container'
import PlasticBox from '../sprites/PlasticBox'
import GameB_Track from '../groups/GameB_Track'
import ReSprite from '../sprites/ReSprite'
import Title from '../groups/Title'

import { mouseOverlap } from '../actions/collisionCheck'
import { textResort } from '../actions/textManagement'
import { shuffle, customShuffle } from '../functions'

import config from '../config'

export default class GameB_sectionB extends Phase{

    preload(){

        this.customState = {
            targetMargin: config.widthGrid*2.5,
            targetLocation: [{x:0,y:0},{x:1,y:0},{x:0,y:.6},{x:1,y:.6}],
            groupIndex: 0,
            gameMark: 0,
            itemsCount: this.sources.items.length,
        }

        this.sources.items = shuffle(this.sources.items)

        this.bg = this.game.add.sprite(0, 0, 'gameBBg')
        this.bg.height = this.world.height
        this.bg.width = this.world.width

        this.itemDropHandler = this.itemDropHandler.bind(this)
        this.newBread = this.newBread.bind(this)
        this.countdownEnd = this.countdownEnd.bind(this)
    }

    create(){

        this.shelf = new GameB_container({game:this.game, x:config.widthGrid*2.5, y:config.heightGrid*4})
        this.targetContainer = new ReGroup(this.game, this.shelf.width/3.5, 0)

        this.shelf.add(this.targetContainer)
        this.shelf.scale.setTo(1.2)

        this.machine = new GameB_Track({game: this.game, x:0, y:config.heightGrid*6})
        this.machine.scale.setTo(.9)

        this.title = new Title({game: this.game, x:config.widthGrid * 3, y:config.heightGrid*1.2, text:"麵包包裝工場", colorHex:'0172bd'})
        this.scoreboard = new Scoreboard({game: this.game, x:config.widthGrid * 8, y:config.heightGrid*1.2})

        this.backetOfBreads = this.game.add.existing(new ReSprite(this.game, 0, this.world.height, 'backetOfBreads'))
        this.backetOfBreads.anchor.setTo(.2, .8)
        this.backetOfBreads.reScale(1.1)

        this.baker = new Baker({game: this.game, x: config.widthGrid*9.5, y: this.world.height, tagName:'麵包切割主管', charIndex: 1})
        this.baker.scale.setTo(.9)

        new Countdown({game: this.game, x: this.world.centerX, y: this.world.centerY, seconds: 3, callback: this.countdownEnd})

        new Headline({game: this.game, x:0, y:0, gameName:'GameB'})

        this.returnButton = this.add.text(50*config.scaleRate, 50*config.scaleRate, "Return To Home Screen", { font: 'bold 20pt Arial', fill: 'red', align: 'left'})
        this.returnButton.scale.setTo(config.scaleRate)
        this.returnButton.inputEnabled = true;
        this.returnButton.events.onInputDown.add(()=> this.state.start('HomeScreen'))

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

    countdownEnd(){
        this.newBread()
    }

    newBread(){

        //phaser's destroy() function will remove the element immediately when invoke,
        //which make any for loop off gird,while loop is a better solution.
        while(typeof this.targetContainer.children[0] != 'undefined'){
            this.targetContainer.children[0].destroy()
        }

        if(typeof this.sources.items[this.customState.groupIndex] == 'undefined'){
            this.state.start('BillBoard', true, false, {score: Math.round(this.customState.gameMark*100)})
            return
        }

        this.machine.active(
            this.sources.items[this.customState.groupIndex].text, 
            this.sources.items[this.customState.groupIndex].index,
            this.itemDropHandler,
            mouseOverlap
        )

        let randTargetList = customShuffle(Object.keys(this.sources.targets), 4, this.sources.items[this.customState.groupIndex].index)

        let currChild = 0

        randTargetList.forEach((targetIndex)=>{
            this.targetContainer.add(
                new Basket({
                    game: this.game, x:this.customState.targetLocation[currChild].x*this.customState.targetMargin, y:this.customState.targetLocation[currChild].y*this.customState.targetMargin, 
                    matcherElm: targetIndex, displayElm: textResort(this.sources.targets[targetIndex], 7),
                    spriteBlock: PlasticBox
                })
            )
            currChild++
        })

        this.customState.groupIndex++
    }
}