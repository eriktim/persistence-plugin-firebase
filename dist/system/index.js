'use strict';

System.register(['./config', './firebase'], function (_export, _context) {
  "use strict";

  var Config, baseConfig;
  function configure(aurelia, callback) {
    var config = new Config();
    config.configure(baseConfig);
    if (typeof callback === 'function') {
      callback(config);
    }
  }

  _export('configure', configure);

  return {
    setters: [function (_config) {
      Config = _config.Config;
    }, function (_firebase) {
      var _exportObj = {};
      _exportObj.Firebase = _firebase.Firebase;

      _export(_exportObj);
    }],
    execute: function () {
      baseConfig = {
        apiKey: null,
        authDomain: null,
        databaseURL: null,
        storageBucket: null
      };
    }
  };
});