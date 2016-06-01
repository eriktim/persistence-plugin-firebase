'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Firebase = undefined;

var _dec, _class;

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

require('firebase');

var _config = require('./config');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Firebase = exports.Firebase = (_dec = (0, _aureliaDependencyInjection.inject)(_config.Config), _dec(_class = function Firebase(config) {
  _classCallCheck(this, Firebase);

  this.url = config.databaseURL;
  this.native = firebase;
  this.native.initializeApp(config.current);
}) || _class);