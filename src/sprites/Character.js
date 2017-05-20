import ReSprite from './ReSprite'

export default class Character extends ReSprite{
    constructor({game, x, y, asset}){
        const cacheName = typeof asset == 'undefined' ? 'character_'+Math.floor(Math.random()*10) : asset;
        super(game, x, y, cacheName)

        this.anchor.setTo(.5, 1)
    }
}