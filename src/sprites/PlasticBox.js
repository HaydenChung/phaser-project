import ReSprite from './ReSprite'

export default class PlasticBox extends ReSprite{
    constructor({game, x, y, asset}){
        const cacheName = typeof asset == 'undefined' ? 'plasticBox_'+Math.floor(Math.random()*4) : asset;
        super(game, x, y, cacheName)
        
        this.anchor.setTo(.5)
    }
}