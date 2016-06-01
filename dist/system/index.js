'use strict';

System.register(['./config', './authentication'], function (_export, _context) {
  "use strict";

  var Config, baseConfig;
  return {
    setters: [function (_config) {
      Config = _config.Config;
    }, function (_authentication) {
      var _exportObj = {};
      _exportObj.AuthenticationService = _authentication.AuthenticationService;

      _export(_exportObj);
    }],
    execute: function () {
      baseConfig = {
        apiKey: null,
        authDomain: null,
        databaseURL: null,
        storageBucket: null
      };
      function configure(aurelia, callback) {
        var config = new Config();
        config.configure(baseConfig);
        if (typeof callback === 'function') {
          callback(config);
        }
      }

      _export('configure', configure);
    }
  };
});