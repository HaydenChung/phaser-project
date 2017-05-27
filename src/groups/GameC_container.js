import Phaser from 'phaser'

export default class GameC_container extends Phaser.Group {
    constructor({game, x, y}){
        super(game)

        this.x = x;
        this.y = y;

    }
}