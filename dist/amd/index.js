define(['exports', './authentication', './config'], function (exports, _authentication, _config) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AuthenticationService = undefined;
  Object.defineProperty(exports, 'AuthenticationService', {
    enumerable: true,
    get: function () {
      return _authentication.AuthenticationService;
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