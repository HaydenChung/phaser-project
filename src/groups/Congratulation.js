import ReGroup from './ReGroup'
import ReSprite from '../sprites/ReSprite'
import config from '../config'

export default class Congratulation extends ReGroup{
    constructor({game, x, y, baseColor, text}){
        super(game, x, y)

        this.createShape = this.createShape.bind(this)

        let graphics = this.createShape(1030, 580, baseColor)

        let shadow = this.add(new ReSprite(game, 0, 0, graphics.generateTexture()))
        shadow.anchor.setTo(.5)
        shadow.reScale(1.01)
        shadow.tint = 0x000000
        shadow.alpha = 0.1
        shadow.position.setTo(5, 10)

        this.broad = this.add(new ReSprite(game, 0, 0, graphics.generateTexture()))
        this.broad.anchor.setTo(.5)

        let xGrid = this.broad.width/10
        let yGrid = this.broad.height/10

        this.rightGrass = this.add(new ReSprite(game, xGrid*3, 0, 'win_game_0'))
        this.rightGrass.anchor.setTo(.5)
        this.rightGrass.tint = baseColor
        this.rightGrass.alpha = .5

        this.leftGrass = this.add(new ReSprite(game, xGrid*-3, 0, 'win_game_0'))
        this.leftGrass.anchor.setTo(.5)
        this.leftGrass.unEqualScale(-1, 1)
        this.leftGrass.tint = baseColor
        this.leftGrass.alpha = .5

        this.gamerScore = game.add.text( 0, 0, text , { font: 'bold 20pt DFYuan-Md-HK-BF', fill: 'red', align: 'left'}, this)
        this.gamerScore.anchor.setTo(.5)
        this.gamerScore.scale.setTo(config.scaleRate)

        this.medal = this.add(new ReSprite(game, xGrid*-3, yGrid*3, 'win_game_1'))
        this.medal.anchor.setTo(.5)
        this.starLarge = this.add(new ReSprite(game, xGrid*-1, yGrid*-4, 'win_game_2'))
        this.starLarge.anchor.setTo(.5)
        this.starSmall = this.add(new ReSprite(game, xGrid*-2, yGrid*-3.5, 'win_game_3'))
        this.starSmall.anchor.setTo(.5)

        this.confimBtn = this.add(new ReSprite(game, xGrid*2, yGrid*2.5, 'win_game_4'))
        this.confimBtn.anchor.setTo(.5)

        graphics.destroy();

        this.game.add.tween(this.starLarge.scale).from({x:0,y:0}, 1000, Phaser.Easing.Bounce.Out, true)
        this.game.add.tween(this.starSmall.scale).from({x:0,y:0}, 1300, Phaser.Easing.Bounce.Out, true)

    }

    createShape(width, height, lineColor){
        let graphics = this.game.add.graphics(0, 0, this),
        innerWidth = width/2,
        innerHeight = height/2,
        outerWidth = innerWidth*1.15,
        outerHeight = innerHeight*1.2,
        lineWidth = 20

        graphics.beginFill(0xFFFFFF);
        graphics.lineStyle(lineWidth, lineColor, 1);
    
        graphics.moveTo(-outerWidth, -innerHeight)
        graphics.quadraticCurveTo(-innerWidth,-innerHeight,-innerWidth,-outerHeight);
        graphics.lineTo(innerWidth,-outerHeight);
        graphics.quadraticCurveTo(innerWidth,-innerHeight,outerWidth,-innerHeight);
        graphics.lineTo(outerWidth,innerHeight);
        graphics.quadraticCurveTo(innerWidth,innerHeight,innerWidth,outerHeight);
        graphics.lineTo(-innerWidth,outerHeight);
        graphics.quadraticCurveTo(-innerWidth,innerHeight,-outerWidth,innerHeight)
        graphics.lineTo(-outerWidth,-innerHeight-(lineWidth/2))
        graphics.endFill();        

        return graphics;
    }
}