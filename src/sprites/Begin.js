import ReSprite from './ReSprite'

export default class Begin extends ReSprite{
    constructor({game, x, y}){
        super(game, x, y, 'begin')
        
        this.reScale(0.3)
        this.anchor.setTo(.5)
    }
}