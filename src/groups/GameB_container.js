import ReGroup from './ReGroup'
import ReSprite from '../sprites/ReSprite'

export default class GameB_container extends ReGroup{
    constructor({game, x, y}){
        super(game, x, y)

        this.shelf = this.add(new ReSprite(game, 0, 0, 'gameB_shelf'))
        // this.shelf.anchor.setTo(.5)
    }
}