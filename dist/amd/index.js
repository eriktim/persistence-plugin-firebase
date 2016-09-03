define(['exports', './config'], function (exports, _config) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
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