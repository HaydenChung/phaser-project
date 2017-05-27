import ReSprite from './ReSprite'

export default class Character extends ReSprite{
    constructor({game, x, y, charIndex}){
        const cacheName = typeof charIndex == 'undefined' ? 'character_'+Math.floor(Math.random()*10) : 'character_'+charIndex;
        super(game, x, y, cacheName)

        this.anchor.setTo(.5, 1)
    }
}