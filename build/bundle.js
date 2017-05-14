webpackJsonp([0],{

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(2);

var _phaser = __webpack_require__(1);

var _phaser2 = _interopRequireDefault(_phaser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var game = new _phaser2.default.Game(640, 360, _phaser2.default.AUTO);

var GameState = {
    preload: function preload() {},
    create: function create() {},
    update: function update() {}
};

game.state.add('GameState', GameState);
game.state.start('GameState');

/***/ })

},[4]);
//# sourceMappingURL=bundle.js.map