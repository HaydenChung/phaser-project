import ReGroup from './ReGroup'

export default class Title extends ReGroup{
    constructor({game, x, y, text, colorHex, fontSize="30"}){
        super(game, x, y)

        this.textBlock = game.add.text(
            0, 0, text,
            { font: `bold ${fontSize}px LiHei Pro Medium,Microsoft JhengHei`, fill: '#'+colorHex, align: 'center', backgroundColor:'rgba(255, 255, 255, 0.5)'}, this
        )
        this.textBlock.anchor.setTo(.5)

        let graphics = game.add.graphics(0, 0, this)
        graphics.beginFill(0xfffced)
        graphics.lineStyle(4, '0x'+colorHex, .3)
        graphics.drawRoundedRect(0 , 0, this.textBlock.width*1.3, this.textBlock.height*1.5, this.textBlock.height/5)


        graphics.lineWidth = 1
        graphics.beginFill('0x'+colorHex, .3)
        graphics.moveTo(this.textBlock.width*0.15, graphics.height/10)
        graphics.lineTo(this.textBlock.width*1.15, graphics.height/10)

        graphics.moveTo(this.textBlock.width*0.15, graphics.height/10*8.5)
        graphics.lineTo(this.textBlock.width*1.15, graphics.height/10*8.5)

        graphics.lineWidth = 0
        graphics.drawCircle(graphics.width/20, graphics.height/10, 8)
        graphics.drawCircle(graphics.width/20, graphics.height/10*8.5, 8)
        graphics.drawCircle(graphics.width/10*9.5, graphics.height/10*8.5, 8)
        graphics.drawCircle(graphics.width/10*9.5, graphics.height/10, 8)

        graphics.position.setTo(-graphics.width/2, -graphics.height/2)
        this.bringToTop(this.textBlock)
    }
}