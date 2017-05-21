import Phaser from 'phaser'
import config from '../config'

export default class ReGroup extends Phaser.Group {
    constructor(game, x, y, actions={}){
        super(game)

        this.x = x;
        this.y = y;

        Object.keys(actions).forEach((key)=> {
            this[key] = actions[key].bind(this)
        })
    }
}