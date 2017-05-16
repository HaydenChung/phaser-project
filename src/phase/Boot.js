import Phaser from 'phaser'

export default class extends Phaser.State {
    constructor(nextPhase){
        super();
        this.nextPhase = nextPhase;
    }

    init(){
        this.stage.backgroundColor = "#000000"
        this.loadState = true;
        // this.load.onLoadComplete.add(()=>{
        //     this.loadState = true
        //     console.log('finish') 
        // }, this);
    }

    preload(){
        // this.load.image('background','../assets/images/maxresdefault.jpg')
        // this.load.image('begin','../assets/images/begin.png')
        // this.load.image('protal','../assets/images/protal.png')
    }

    render() {
        if(this.loadState == true) this.state.start(this.nextPhase)
    }


}