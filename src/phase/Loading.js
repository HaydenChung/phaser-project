import Phaser from 'phaser'

export default class extends Phaser.State {

    constructor({sources, nextPhase}){
        super();
        this.sourceArray = sources;
        this.nextPhase = nextPhase;
    }

    init(){
        this.loadingStateText = this.add.text(this.world.centerX, this.world.centerY , '0%',{ font: "65px Arial", fill: "#ff0044", align: "center" })
        this.loadingStateText.anchor.setTo(.5)
        this.load.onFileComplete.add((progress)=> {
            this.loadingStateText.text = "Loading "+progress+"%";
        })
        this.load.onLoadComplete.add(()=>{
            this.loadingStateText.text = `100%\nReady!`;
            setTimeout(()=>this.state.start(this.nextPhase),1000);
        })
    }

    preload(){
        this.sourceArray.forEach((source)=>{
            this.load[source.type](source.key,source.url)
        })
    }

    loadComplate(){
        this.state.start(nextPhase);
    }


}