import 'pixi'
import 'p2'
import Phaser from 'phaser'


var game = new Phaser.Game(640, 360, Phaser.AUTO);

var GameState = {
    preload: ()=> {

    },
    create: ()=> {

    },
    update: ()=> {

    }
};

game.state.add('GameState', GameState);
game.state.start('GameState');
