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

require('console-polyfill');

var _config = require('./config');

var _firebase = require('./firebase');