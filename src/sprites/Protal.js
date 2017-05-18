import ReSprite from './ReSprite'

export default class Protal extends ReSprite{
    constructor({game, x, y}){
        super(game, x, y, 'protal')

        this.reScale(0.3)
        this.anchor.setTo(.5)
    }
}