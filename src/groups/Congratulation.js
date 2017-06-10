import ReGroup from './ReGroup'
import ReSprite from '../sprites/ReSprite'
import config from '../config'
import Title from '../groups/Title'


export default class Congratulation extends ReGroup{
    constructor({game, x, y, baseColor, text, score, title}){
        super(game, x, y)

        this.createShape = this.createShape.bind(this)
        this.addStar = this.addStar.bind(this)

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

        this.title = this.add(new Title({game: game, x: 0, y: yGrid*-5, text:title, colorHex: "f7941f"}))
        this.title.scale.setTo(1.2)

        this.gamerScore = game.add.text( 0, yGrid*-3, score , { font: 'bold 30pt DFYuan-Md-HK-BF', fill: '#9a3401', align: 'center'}, this)
        this.gamerScore.anchor.setTo(.5)
        this.gamerScore.scale.setTo(config.scaleRate)

        this.textBlock = game.add.text( 0, 0, text , { font: 'bold 30pt DFYuan-Md-HK-BF', fill: '#4B3A2F', align: 'left'}, this)
        this.textBlock.anchor.setTo(.5)
        this.textBlock.scale.setTo(config.scaleRate)
        this.textBlock.lineSpacing = 20*config.scaleRate;

        this.medal = this.add(new ReSprite(game, xGrid*-2.5, yGrid*3, 'win_game_1'))
        this.medal.anchor.setTo(.6,.4)
        this.game.add.tween(this.medal).to({angle:-20}, 1500, Phaser.Easing.Linear.None).to({angle:0}, 1500, Phaser.Easing.Linear.None).loop().start()

        this.addStar(xGrid*-4.8, yGrid*-3, .8)
        this.addStar(xGrid*-4.1, yGrid*-4.8, 1.3)
        this.addStar(xGrid*-2.8, yGrid*-5, 1.8)
        this.addStar(xGrid*3, yGrid*-5, 1.1)
        this.addStar(xGrid*3.3, yGrid*-3.2, .6)
        this.addStar(xGrid*4, yGrid*-4, .7)

        this.confimBtn = this.add(new ReSprite(game, xGrid, yGrid*2.5, 'win_game_4'))
        this.confimBtn.anchor.setTo(.5)

        graphics.destroy();

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

    addStar(x, y, scale){
        let star = this.add(new ReSprite(this.game, x, y, 'win_game_'+(Math.floor(Math.random()*2)+2)))
        star.anchor.setTo(.5)
        star.angle = 180*Math.random()
        star.reScale(scale)
        let timer = 800+(Math.floor(Math.random()*2000))
        let animate = this.game.add.tween(star.scale).to({x:(scale/2)*config.scaleRate,y:(scale/2)*config.scaleRate}, timer, Phaser.Easing.Linear.None).to({x:scale*config.scaleRate,y:scale*config.scaleRate}, timer, Phaser.Easing.Linear.None).loop()
        animate.start();
    }
}