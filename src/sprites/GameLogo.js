import ReSprite from './ReSprite'

export default class GameLogo extends ReSprite{
    constructor({game, x, y, gameName}){
        super(game, x, y, gameName+'Logo')
        
    }
}