import ReSprite from './ReSprite'

export default class Backet extends ReSprite{
    constructor({game, x, y, asset}){
        const cacheName = typeof asset == 'undefined' ? 'backet_'+Math.round(Math.random()*4) : asset;
        super(game, x, y, cacheName)
        
        this.anchor.setTo(.5)
    }
}