import Phaser from 'phaser'
import config from '../config'

export default class Scoreboard extends Phaser.Group{
    constructor({game, x, y, totalScore = 100}){
        super(game)
        
        this.x = x
        this.y = y

        this.customState ={
            totalScore: totalScore
        }

        this.score = game.add.text(
            0, 0, `分數\n0/`+this.customState.totalScore,
            { font: 'bold 40pt Arial', fill: 'red', align: 'left'}, this
        )

        this.score.scale.setTo(config.scaleRate)
        this.score.anchor.setTo(.5)
    }

    change(num){
        this.score.setText(`分數\n${Math.round(num*this.customState.totalScore)}/${this.customState.totalScore}`)
    }
}