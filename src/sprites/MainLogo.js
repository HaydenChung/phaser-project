import ReSprite from './ReSprite'

export default class MainLogo extends ReSprite{
    constructor({game, x, y}){
        super(game, x, y, 'mainLogo')
        
        this.anchor.setTo(.5, 0)
    }
}