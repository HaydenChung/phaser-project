import Phaser from 'phaser'
import Backet from '../sprites/Backet'
import config from '../config'

export default class Basket extends Phaser.Group{
    constructor({game, x, y, typeName, spriteBlock}){
        super(game)

        this.customState = {
            typeName: typeName
        }

        this.x = x;
        this.y = y;

        this.spriteBlock = typeof spriteBlcok == 'undefined' ? this.add(new Backet({game: game, x:0, y:0})) : this.add(new spriteBlock({game: game, x:0, y:0}))
        this.spriteBlock.reScale(0.9)

        this.textBlock = game.add.text(
            0, 0, typeName,
            { font: 'bold 20pt Arial', fill: 'white', align:'center'}, this
        )
        this.textBlock.anchor.setTo(.5)
        this.textBlock.scale.setTo(config.scaleRate)

        this.addBread = this.addBread.bind(this)
    }

    addBread(breadObject){
        if(typeof breadObject.parent != undefined)breadObject.parent.remove(breadObject)
        this.add(breadObject)
        let randomNum = Math.random()-0.5
        breadObject.x = this.spriteBlock.width/2*(randomNum)
        breadObject.y = -this.spriteBlock.height/2
        breadObject.angle = 180*-randomNum
        this.bringToTop(breadObject)
    }
}