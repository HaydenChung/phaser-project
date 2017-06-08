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
            { font: 'bold 35pt DFYuan-Md-HK-BF,LiHei Pro Medium,Microsoft JhengHei', fill: '#4B3A2F', align: 'center'}, this
        )

        this.textBlock.stroke = "#ffffff"
        this.textBlock.strokeThickness = 16
        this.textBlock.setShadow(1, 1, "#333333", 2, true, true)
        this.textBlock.scale.setTo(config.scaleRate)
        this.textBlock.anchor.setTo(.6,.65)

    }
}