import Phaser from 'phaser'

export default class Phase extends Phaser.State {
    constructor({nextPhase = '',sources = {}}){
        super()
        this.nextPhase = nextPhase
        this.sources = sources

        this.toNextPhase = this.toNextPhase.bind(this)
    }

    toNextPhase(){
        if(this.nextPhase) this.state.start(this.nextPhase)
    }
}