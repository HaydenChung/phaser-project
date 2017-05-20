import ReSprite from './ReSprite'

export default class Bread extends ReSprite{
    constructor({game, x, y, asset}){
        const cacheName = typeof asset == 'undefined' ? 'bread_'+Math.floor(Math.random()*10) : asset;
        super(game, x, y, cacheName)
        
        this.anchor.setTo(.5)
    }
}