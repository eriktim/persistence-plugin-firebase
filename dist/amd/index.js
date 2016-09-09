define(['exports', './config', './firebase', 'console-polyfill'], function (exports, _config, _firebase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (userConfig) {
    var config = _config.Config.create(userConfig);
    var firebase = new _firebase.Firebase(config);
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
  };
});