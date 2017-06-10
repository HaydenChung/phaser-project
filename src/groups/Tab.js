import ReGroup from './ReGroup'
import ReSprite from '../sprites/ReSprite'
import config from '../config'

export default class Tab extends ReGroup {
    constructor({game, x, y, action, text}){
        super(game, x, y)
        this.spriteBlock = this.add(new ReSprite(game, 0, 0, 'tab'))
        this.spriteBlock.anchor.setTo(.5, 1)
        this.textBlock = game.add.text(
            0, -this.height/2, text,
            { font: '35pt DFYuan-Md-HK-BF', fill: '#2baf59', align: 'center'}, this
        )

        this.textBlock.stroke = "#ffffff"
        this.textBlock.strokeThickness = 16
        this.textBlock.setShadow(0, 0, "#2baf59", 4, false, true)
        // this.textBlock.setShadow(-2, -2, "#333333", 2, false, true)
        // this.textBlock.setShadow(2, -2, "#333333", 2, false, true)
        // this.textBlock.setShadow(-2, 2, "#333333", 2, false, true)
        this.textBlock.scale.setTo(config.scaleRate)
        this.textBlock.anchor.setTo(.6,.65)

    }
}