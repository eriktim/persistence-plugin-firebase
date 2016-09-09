'use strict';

System.register(['console-polyfill', './config', './firebase'], function (_export, _context) {
  "use strict";

  var Config, Firebase;

  _export('default', function (userConfig) {
    var config = Config.create(userConfig);
    var firebase = new Firebase(config);
    var baseUrl = config.databaseURL;
    return {
      baseUrl: baseUrl,
      queryEntityMapperFactory: function queryEntityMapperFactory(Entity) {
        return function (data) {
          var map = new Map();
          for (var key in data) {
            map.set(data[key], Entity);
          }
          return map;
        };
      },
      fetchInterceptor: firebase.fetchInterceptor,
      set: {
        'firebase': firebase
      }
    };
  });

  return {
    setters: [function (_consolePolyfill) {}, function (_config) {
      Config = _config.Config;
    }, function (_firebase) {
      Firebase = _firebase.Firebase;
    }],
    execute: function () {}
  };
});