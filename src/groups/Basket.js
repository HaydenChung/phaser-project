import Phaser from 'phaser'
import Protal from '../sprites/Protal'
import config from '../config'

export default class Basket extends Phaser.Group{
    constructor({game, x, y, typeName, spriteBlock}){
        super(game)

        this.customState = {
            typeName: typeName
        }

        this.x = x;
        this.y = y;

        this.spriteBlock = this.add(spriteBlock|| new Protal({game: game, x:0, y:0}))
        this.spriteBlock.angle = 90

        this.textBlock = game.add.text(
            0, 0, typeName,
            { font: 'bold 20pt Arial', fill: 'white', align:'center'}, this
        )
        this.textBlock.anchor.setTo(.5)
        this.textBlock.scale.setTo(config.scaleRate)

    }
}