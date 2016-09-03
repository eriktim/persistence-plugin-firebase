define(['exports', './firebase', './config'], function (exports, _firebase, _config) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Firebase = undefined;
  Object.defineProperty(exports, 'Firebase', {
    enumerable: true,
    get: function () {
      return _firebase.Firebase;
    }
  });
  exports.configure = configure;


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
});