import Phase from './Phase'

export default class RequestFullScreen extends Phase{
    create(){

        this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

        this.requestBtn = this.game.add.text(this.world.centerX, this.world.centerY, "Play the game at fullscreen", { font: 'bold 20pt DFYuan-Md-HK-BF', fill: 'red', align: 'left'})
        this.requestBtn.inputEnabled = true;
        this.requestBtn.events.onInputDown.add(this.gofull, this)

        // this.requestBtn.addEventlistener(())

        this.gofull = this.gofull.bind(this)

    }

    gofull() {

        if (this.game.scale.isFullScreen)
        {
            this.game.scale.stopFullScreen();
        }
        else
        {
            this.game.scale.startFullScreen(false);
            this.toNextPhase();
        }

    }
}