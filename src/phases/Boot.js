import Phase from './Phase'

export default class extends Phase {

    init(){
        this.stage.backgroundColor = "#000000"
        this.loadState = true;
    }

    render() {
        if(this.loadState == true) this.toNextPhase()
    }
}