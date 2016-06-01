define(['exports', 'aurelia-dependency-injection', './config', 'firebase'], function (exports, _aureliaDependencyInjection, _config) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Firebase = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Firebase = exports.Firebase = (_dec = (0, _aureliaDependencyInjection.inject)(_config.Config), _dec(_class = function Firebase(config) {
    _classCallCheck(this, Firebase);

    this.url = config.databaseURL;
    this.native = firebase;
    this.native.initializeApp(config.current);
  }) || _class);
});