import ReSprite from './ReSprite'

export default class Begin extends ReSprite{
    constructor({game, x, y, asset}){
        super(game, x, y, asset)
        
        this.reScale(0.3)
        this.anchor.setTo(.5)
    }
}