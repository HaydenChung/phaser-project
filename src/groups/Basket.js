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
        this.spriteBlock.reScale(0.8)

        this.textBlock = game.add.text(
            0, 0, typeName,
            { font: 'bold 20pt Arial', fill: 'white', align:'center'}, this
        )
        this.textBlock.anchor.setTo(.5)
        this.textBlock.scale.setTo(config.scaleRate)

    }
}