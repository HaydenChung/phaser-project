webpackJsonp([0],{

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(2);

var _phaser = __webpack_require__(1);

var _phaser2 = _interopRequireDefault(_phaser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// var game = new Phaser.Game(640, 360, Phaser.AUTO);


var Game = function (_Phaser$Game) {
    _inherits(Game, _Phaser$Game);

    function Game(width, height) {
        _classCallCheck(this, Game);

        // this.state.add('GameState')
        var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, width, height, _phaser2.default.AUTO));

        _this.load.onLoadComplete.add(function () {
            return console.log('finish');
        }, _this);

        _this.gameState = {
            preload: function preload() {
                _this.load.image('background', '../assets/images/maxresdefault.jpg');
                _this.load.image('begin', '../assets/images/begin.png');
                _this.load.image('protal', '../assets/images/protal.png');
            },
            create: function create() {
                _this.bg = _this.add.sprite(0, 0, 'background');
                _this.bg.height = _this.world._height;
                _this.bg.width = _this.world._width;

                _this.protal = _this.add.sprite(_this.world.centerX * 1.2, _this.world.centerY, 'protal');
                _this.protal.anchor.setTo(.5);
                _this.protal.scale.setTo(0);

                _this.beginImg = _this.add.sprite(0, _this.world.centerY, 'begin');
                _this.beginImg.anchor.setTo(.5);
                _this.beginImg.scale.setTo(-.4, .4);

                _this.beginImg2 = _this.add.sprite(100, _this.world.centerY, 'begin');
                _this.beginImg2.anchor.setTo(0, 0.5);
                _this.beginImg2.scale.setTo(0);
                _this.beginImg2.angle = -180;
                _this.beginImg2.inputEnabled = true;
                _this.beginImg2.input.enableDrag();

                // this.physics.arcade.enable([this.beginImg,this.protal], Phaser.Physics.ARCADE)

                var beginMovement = _this.add.tween(_this.beginImg).to({ x: _this.world.centerX }, 1000, _phaser2.default.Easing.Linear.None, true);

                beginMovement.onComplete.add(function () {
                    _this.add.tween(_this.protal.scale).to({ x: 0.4, y: 0.4 }, 500, _phaser2.default.Easing.Linear.None, true).onComplete.add(function () {
                        _this.add.tween(_this.beginImg.scale).to({ x: .4 }, 600, _phaser2.default.Easing.Linear.None, true).onComplete.add(function () {
                            setTimeout(function () {
                                return _this.add.tween(_this.beginImg).to({ x: _this.world.centerX + 500 }, 300, _phaser2.default.Easing.Linear.None, true);
                            }, 200);
                            _this.add.tween(_this.beginImg.scale).to({ x: 0, y: 0 }, 300, _phaser2.default.Easing.Linear.None, true).onComplete.add(function () {
                                _this.add.tween(_this.protal.scale).to({ x: 0, y: 0 }, 500, _phaser2.default.Easing.Linear.None, true).onComplete.add(function () {
                                    _this.add.tween(_this.beginImg2.scale).to({ x: .3, y: .3 }, 1000, _phaser2.default.Easing.Linear.None, true);
                                    _this.add.tween(_this.beginImg2).to({ angle: 0 }, 1000, _phaser2.default.Easing.Linear.None, true);
                                    _this.add.tween(_this.beginImg2.anchor).to({ x: .5 }, 1000, _phaser2.default.Easing.Linear.None, true);
                                });
                            });
                        });
                    });
                });
            },
            update: function update() {

                // if(this.beginImg.x < this.world.centerX){
                //     this.beginImg.x += 4;
                // }else {
                //     if(this.protal.scale.x == 0){
                //         this.add.tween(this.protal.scale).to({x:0.4,y:0.4}, 600, Phaser.Easing.Linear.None, true)
                //         this.add.tween(this.beginImg.scale).to({x:0.4}, 500, Phaser.Easing.Linear.None, true)
                //     }
                // }

                // if(this.beginImg.scale.x == 0.4) this.add.tween(this.beginImg.scale).to({x:0.01,y:0.01}, 300, Phaser.Easing.Linear.None, true)
            }
        };

        _this.state.add('GameState', _this.gameState);
        _this.state.start('GameState');
        return _this;
    }

    return Game;
}(_phaser2.default.Game);

var game = new Game(860, 480);

/***/ })

},[4]);
//# sourceMappingURL=bundle.js.map