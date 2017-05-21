import Phase from './Phase'

export default class Logo extends Phase {

    create(){
        this.bg = this.add.sprite(0, 0, 'background')
        this.bg.height = this.world._height
        this.bg.width = this.world._width

        this.protal = this.add.sprite(this.world.centerX*1.2, this.world.centerY, 'protal')
        this.protal.anchor.setTo(.5)
        this.protal.scale.setTo(0)

        this.beginImg = this.add.sprite(0, this.world.centerY, 'begin')
        this.beginImg.anchor.setTo(.5)
        this.beginImg.scale.setTo(-.4,.4)

        this.add.tween(this.beginImg).to({x:this.world.centerX}, 1500,  Phaser.Easing.Bounce.Out, true)
        .onComplete.add(()=>{
            this.add.tween(this.beginImg.scale).to({x: -.3,y: .3}, 1500, Phaser.Easing.Linear.None, true)
            .onComplete.add(()=>{
                this.add.tween(this.beginImg).to({x:this.world.centerX+50}, 100, Phaser.Easing.Linear.None, true)
                .onComplete.add(()=>{
                    this.add.tween(this.beginImg).to({x:this.world.centerX}, 100, Phaser.Easing.Linear.None, true)
                    .onComplete.add(()=>{
                        this.add.tween(this.protal.scale).to({x:0.4,y:0.4}, 500, Phaser.Easing.Linear.None, true)
                        .onComplete.add(()=>{
                            this.add.tween(this.beginImg.scale).to({x:.4}, 600, Phaser.Easing.Linear.None, true)
                            .onComplete.add(()=>{
                                setTimeout(()=>this.add.tween(this.beginImg).to({x:this.world.centerX+500}, 300, Phaser.Easing.Linear.None, true),
                                200)
                                this.add.tween(this.beginImg.scale).to({x:0,y:0}, 300, Phaser.Easing.Linear.None, true)
                                .onComplete.add(()=>{
                                    this.add.tween(this.protal.scale).to({x:0,y:0}, 500, Phaser.Easing.Linear.None, true)
                                    .onComplete.add(()=>{
                                        this.toNextPhase()
                                    })
                                })
                            })
                        })
                    })
                })
            })
        });
    }
}