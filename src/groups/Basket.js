import Phaser from 'phaser'
import Backet from '../sprites/Backet'
import config from '../config'
import ReSprite from '../sprites/ReSprite'

export default class Basket extends Phaser.Group{
    constructor({game, x, y, matcherElm, displayElm, spriteBlock}){
        super(game)

        this.customState = {
            matcherElm,
            displayElm
        }

        this.x = x;
        this.y = y;

        this.spriteBlock = typeof spriteBlock == 'undefined' ? this.add(new Backet({game: game, x:0, y:0})) : this.add(new spriteBlock({game: game, x:0, y:0}))
        this.spriteBlock.reScale(0.9)


        this.backetBackGroup = this.add(new Phaser.Group(this.game))
        this.backetBack = this.backetBackGroup.add(new ReSprite(this.backetBackGroup.game, 0, 0, 'backetBack'))
        this.backetBack.anchor.setTo(.5)
        this.backetBack.reScale(0.9)

        if(typeof spriteBlock != 'undefined') this.backetBack.visible = false

        this.bringToTop(this.spriteBlock)

        this.textBlock = game.add.text(
            0, 0, displayElm,
            { font: 'bold 40pt Arial', fill: '#4B3A2F', align:'center'}, this
        )
        this.textBlock.anchor.setTo(.5)
        this.textBlock.scale.setTo(config.scaleRate)

        this.addBread = this.addBread.bind(this)
    }

    addBread(breadObject){
        if(typeof breadObject.parent != undefined)breadObject.parent.remove(breadObject)
        this.backetBackGroup.add(breadObject)
        let randomNum = Math.random()-0.45
        breadObject.x = this.backetBack.width/2*(randomNum)
        breadObject.y = -this.backetBack.height/5*2
        breadObject.scale.setTo(1)
        breadObject.angle = 180*-randomNum
        this.backetBackGroup.bringToTop(breadObject)
    }
}