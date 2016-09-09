"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Config = exports.Config = function () {
  _createClass(Config, null, [{
    key: "create",
    value: function create(userConfig) {
      return new Config(userConfig);
    }
  }]);

  function Config(userConfig) {
    _classCallCheck(this, Config);

    var config = {
      apiKey: null,
      authDomain: null,
      databaseURL: null,
      storageBucket: null
    };
    for (var key in userConfig) {
      if (!Reflect.has(config, key)) {
        throw new Error("unknown configuration key: " + key);
      }
      config[key] = userConfig[key];
    }
    return config;
  }

  return Config;
}();