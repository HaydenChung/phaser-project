import Phaser from 'phaser'
import config from '../config'
import ReSprite from '../sprites/ReSprite'

export default class GameC_container extends Phaser.Group {
    constructor({game, x, y}){
        super(game)

        this.x = x;
        this.y = y;

    }
}