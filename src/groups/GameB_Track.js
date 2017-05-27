import ReGroup from './ReGroup'
import RollingDragable from './RollingDragable'
import config from '../config'
import ReSprite from '../sprites/ReSprite'

export default class GameA_Track extends ReGroup {
    constructor({game, x, y}){
        super(game, x, y)

        this.trackA = this.add(new ReSprite(game, 0, 0, 'belt_10'))
        this.trackB = this.add(new ReSprite(game, 0, 0, 'belt_9'))

        this.table = this.add(new ReSprite(game, 0, 0, 'belt_6'))

        this.rollerA = this.add(new ReSprite(game, 417*config.scaleRate, 133*config.scaleRate, 'belt_7'))
        this.rollerA.anchor.setTo(.5)
        this.rollerB = this.add(new ReSprite(game, 525*config.scaleRate, 133*config.scaleRate, 'belt_8'))
        this.rollerB.anchor.setTo(.5)

        this.active = this.active.bind(this)
    }

    active(breadText, breadIndex,itemDropHandler, mouseOverlap){

        if(typeof this.bread != 'undefined'){
            this.bread.destroy()
        }
        this.bread = this.add(new RollingDragable({
            game: this.game, x:-60, y:-5*config.scaleRate,
            displayElm:breadText, matcherElm:breadIndex,
            parentCallback:{itemDropHandler}, actions:{mouseOverlap}
        }))
        this.bread.scale.setTo(1.3)
        this.game.add.tween(this.bread).to({x: this.table.width/3}, 2000, Phaser.Easing.Linear.none, true)
        this.trackB.position.setTo(0, 0)
        this.game.add.tween(this.trackB).to({x: 80*config.scaleRate}, 500, Phaser.Easing.Linear.None, true)
        .repeat(3)

        this.game.add.tween(this.rollerA).to({angle: 360}, 2000, Phaser.Easing.Linear.None, true)
        this.game.add.tween(this.rollerB).to({angle: -360}, 2000, Phaser.Easing.Linear.None, true)
    }
}