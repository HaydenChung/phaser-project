import Phase from './Phase'
import MenuButton from '../groups/MenuButton'
import Character from '../sprites/Character'

export default class HomeScreen extends Phase {
    constructor({nextPhase, sources, gameList}){
        super({nextPhase, sources})
        this.gameList = gameList
        this.phaseElmts = []
    }

    preload(){
        this.stage.backgroundColor = "#000000"
        const marginX = this.world._width/(this.gameList.length+1);

        this.gameList.forEach((game, index)=>{
            let tempChar = {}
            this.phaseElmts.push(
                new MenuButton({
                    game: this.game, x: game.x|| marginX*(index+1), y: game.y|| this.world.centerY,
                    text: game.name, inputUpCallback: ()=> this.state.start(game.phase) , /*spriteBlock:tempChar = new Character({game: this.game, x:0, y:this.world._height/2, asset:'character_0'})*/
                }))
            this.add.existing(this.phaseElmts[this.phaseElmts.length-1])
        })
    }

}