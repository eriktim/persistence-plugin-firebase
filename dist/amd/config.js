define(["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var config = {
    apiKey: null,
    authDomain: null,
    databaseURL: null,
    storageBucket: null
  };

  var Config = exports.Config = function () {
    function Config() {
      _classCallCheck(this, Config);
    }

    _createClass(Config, [{
      key: "configure",
      value: function configure(userConfig) {
        for (var key in userConfig) {
          if (!Reflect.has(config, key)) {
            throw new Error("unknown configuration key: " + key);
          }
          config[key] = userConfig[key];
        }
      }
    }, {
      key: "current",
      get: function get() {
        return Object.assign({}, config);
      }
    }]);

    return Config;
  }();
});