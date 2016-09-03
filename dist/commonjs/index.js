'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Firebase = undefined;

var _firebase = require('./firebase');

Object.defineProperty(exports, 'Firebase', {
  enumerable: true,
  get: function get() {
    return _firebase.Firebase;
  }
});
exports.configure = configure;

var _config = require('./config');

var baseConfig = {
  apiKey: null,
  authDomain: null,
  databaseURL: null,
  storageBucket: null
};

function configure(aurelia, callback) {
  var config = new _config.Config();
  config.configure(baseConfig);
  if (typeof callback === 'function') {
    callback(config);
  }
}