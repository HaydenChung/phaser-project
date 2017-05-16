import 'pixi'
import 'p2'
import Phaser from 'phaser'

import Boot from './phase/Boot'
import Loading from './phase/Loading'

// var game = new Phaser.Game(640, 360, Phaser.AUTO);


class Game extends Phaser.Game {
    constructor(width, height){
        super(width, height, Phaser.AUTO);

        const loadingSource = [
            {type:'image',key:'background',url:'../assets/images/maxresdefault.jpg'},
            {type:'image',key:'begin',url:'../assets/images/begin.png'},
            {type:'image',key:'protal',url:'../assets/images/protal.png'}
            ]

        // this.state.add('GameState')
        this.state.add('Boot',new Boot('Loading'))
        this.state.add('Loading',new Loading({nextPhase:'GameState',sources:loadingSource}))


        this.gameState = {
            create: ()=> {
                this.bg = this.add.sprite(0, 0, 'background')
                this.bg.height = this.world._height;
                this.bg.width = this.world._width;

                this.protal = this.add.sprite(this.world.centerX*1.2, this.world.centerY, 'protal')
                this.protal.anchor.setTo(.5)
                this.protal.scale.setTo(0)

                this.beginImg = this.add.sprite(0, this.world.centerY, 'begin')
                this.beginImg.anchor.setTo(.5)
                this.beginImg.scale.setTo(-.4,.4)

                this.beginImg2 = this.add.sprite(100, this.world.centerY, 'begin')
                this.beginImg2.anchor.setTo(0,0.5)
                this.beginImg2.scale.setTo(0);
                this.beginImg2.angle = -180;
                this.beginImg2.inputEnabled = true;
                this.beginImg2.input.enableDrag();

                // this.physics.arcade.enable([this.beginImg,this.protal], Phaser.Physics.ARCADE)

                let beginMovement = this.add.tween(this.beginImg).to({x:this.world.centerX}, 1000, Phaser.Easing.Linear.None, true);

                beginMovement.onComplete.add(()=>{
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
                                    this.add.tween(this.beginImg2.scale).to({x:.3,y:.3}, 1000, Phaser.Easing.Linear.None, true)
                                    this.add.tween(this.beginImg2).to({angle:0} , 1000, Phaser.Easing.Linear.None, true)
                                    this.add.tween(this.beginImg2.anchor).to({x:.5}, 1000, Phaser.Easing.Linear.None, true)
                                })
                            })
                        })
                    })
                });


            },
            update: ()=> {


            }
        };


        this.state.add('GameState', this.gameState);
        // this.state.start('GameState');
        this.state.start('Boot')
    }
}

var game = new Game(1080, 640);

