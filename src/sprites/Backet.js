import ReSprite from './ReSprite'

export default class Backet extends ReSprite{
    constructor({game, x, y, asset}){
        const cacheName = typeof asset == 'undefined' ? 'backet_'+Math.floor(Math.random()*5) : asset;
        super(game, x, y, cacheName)
        
        this.anchor.setTo(.5)
    }
}