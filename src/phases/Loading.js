import Phase from './Phase'

export default class extends Phase {

    init(){
        this.loadingStateText = this.add.text(this.world.centerX, this.world.centerY , '0%',{ font: "65px Arial", fill: "#ff0044", align: "center" })
        this.loadingStateText.anchor.setTo(.5)
        this.load.onFileComplete.add((progress)=> {
            this.loadingStateText.text = "Loading "+progress+"%";
        })
        this.load.onLoadComplete.add(()=>{
            this.loadingStateText.text = `100%\nReady!`;
            setTimeout(this.toNextPhase,1000);
        })
    }

    preload(){
        this.sources.forEach((source)=>{
            this.load[source.type](source.key,source.url)
        })
    }
}