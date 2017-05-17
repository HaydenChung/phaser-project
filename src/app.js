import 'pixi'
import 'p2'
import Phaser from 'phaser'

import config from './config.js'

import Boot from './phases/Boot'
import Loading from './phases/Loading'
import Logo from './phases/Logo'
import HomeScreen from './phases/HomeScreen'
import GameA from './phases/GameA'

import MenuButton from './groups/MenuButton'

class Game extends Phaser.Game {
    constructor(width, height){
        super(width, height, Phaser.AUTO);

        const logoSource = [
            {type:'image',key:'background',url:config.httpRoot+'/assets/images/maxresdefault.jpg'},
            {type:'image',key:'begin',url:config.httpRoot+'/assets/images/begin.png'},
            {type:'image',key:'protal',url:config.httpRoot+'/assets/images/protal.png'}
        ]

        const gameList = [
            {name:'Game A',phase:'GameA'},
            {name:'Game B',phase:'GameState'},
            {name:'Game C',phase:'GameState'},
            {name:'Game D',phase:'GameState'},
            {name:'Game E',phase:'GameState'}
        ]

        const gameASource = [
            {name:'道具一'},
            {name:'Item2'},
            {name:'Item3'},
            {name:'Item4'}
        ]

        this.state.add('Boot',new Boot({nextPhase:'LogoLoading'}))
        this.state.add('LogoLoading',new Loading({nextPhase:'Logo',sources:logoSource}))
        this.state.add('Logo',new Logo({nextPhase:'HomeScreen'}))
        this.state.add('HomeScreen',new HomeScreen({nextPhase:'GameState',gameList}))
        this.state.add('GameA',new GameA({sources:gameASource}))

        this.gameState = {
            create: ()=> {

                this.returnButton = this.add.text(50*config.scaleRate, 50*config.scaleRate, "Return To Home Screen", { font: 'bold 20pt Arial', fill: 'white', align: 'left'})
                this.returnButton.scale.setTo(config.scaleRate)
                this.returnButton.inputEnabled = true;
                this.returnButton.events.onInputDown.add(()=> this.state.start('HomeScreen'))

                this.testGroup = new MenuButton({game:this, x:this.world.centerX, y:this.world.centerY, text: 'Hello', asset: 'begin'})

                this.beginImg2 = this.add.sprite(100, this.world.centerY, 'begin')
                this.beginImg2.anchor.setTo(0,0.5)
                this.beginImg2.scale.setTo(0);
                this.beginImg2.angle = -180;
                this.beginImg2.inputEnabled = true;
                this.beginImg2.input.enableDrag();

                this.beginImg2.events.onInputDown.add((target, event)=> console.log(target, event))

                this.add.tween(this.beginImg2.scale).to({x:.3,y:.3}, 1000, Phaser.Easing.Linear.None, true)
                this.add.tween(this.beginImg2).to({angle:0} , 1000, Phaser.Easing.Linear.None, true)
                this.add.tween(this.beginImg2.anchor).to({x:.5}, 1000, Phaser.Easing.Linear.None, true)

            },
            update: ()=> {

            }
        };


        this.state.add('GameState', this.gameState);

        this.state.start('Boot')
    }
}

var game = new Game(config.wannaWidth, config.wannaHeight);
