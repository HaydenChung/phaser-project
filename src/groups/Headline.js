import Phaser from 'phaser'
import config from '../config'
import MainLogo from '../sprites/MainLogo'
import GameLogo from '../sprites/GameLogo'

export default class Headline extends Phaser.Group {
    constructor({game, x, y, gameName, showTitle=true}){
        super(game)

        this.x = x;
        this.y = y;

        let graphics = game.add.graphics(0, 0)
        graphics.lineStyle(60*config.scaleRate, 0x15b7b9, 1)
        graphics.lineTo(game.world.width, 0)

        graphics.moveTo(0, 50*config.scaleRate)
        graphics.lineStyle(10*config.scaleRate, 0xe8812e, 1)
        graphics.lineTo(game.world.width, 50*config.scaleRate)

        this.add(graphics)

        if(showTitle != false){
            let mainLogo = new MainLogo({game: game, x:game.world.centerX, y:10})
            mainLogo.reScale(.7)
            this.add(mainLogo)
        }

        if(typeof gameName != 'undefined'){
            let gameLogo = new GameLogo({game: game, x:30*config.scaleRate, y:30*config.scaleRate, gameName:gameName})
            gameLogo.reScale(.8)
            this.add(gameLogo)
        }

    }
}