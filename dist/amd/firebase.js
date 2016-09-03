define(['exports', 'aurelia-dependency-injection', './authentication', './config', 'firebase'], function (exports, _aureliaDependencyInjection, _authentication4, _config) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Firebase = undefined;

  function _toArray(arr) {
    return Array.isArray(arr) ? arr : Array.from(arr);
  }

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

  var _dec, _class;

  var PRIMARY_KEY = '_id';

  var Firebase = exports.Firebase = (_dec = (0, _aureliaDependencyInjection.inject)(_config.Config), _dec(_class = function () {
    function Firebase(config) {
      _classCallCheck(this, Firebase);

      this.url = config.databaseURL;
      this.native = firebase;
      this.native.initializeApp(config.current);
      this.authentication = new _authentication4.Authentication(this);
    }

    _createClass(Firebase, [{
      key: 'isSignedIn',
      value: function isSignedIn() {
        var _authentication;

        return (_authentication = this.authentication).isSignedIn.apply(_authentication, arguments);
      }
    }, {
      key: 'signIn',
      value: function signIn() {
        var _authentication2;

        return (_authentication2 = this.authentication).signIn.apply(_authentication2, arguments);
      }
    }, {
      key: 'signOut',
      value: function signOut() {
        var _authentication3;

        return (_authentication3 = this.authentication).signOut.apply(_authentication3, arguments);
      }
    }, {
      key: 'interceptor',
      get: function get() {
        var _this = this;

        return function (request) {
          if (!(request instanceof Request)) {
            return Promise.resolve(request);
          }
          return _this.getToken().then(function (token) {
            var _request$url$split = request.url.split('?');

            var _request$url$split2 = _toArray(_request$url$split);

            var path = _request$url$split2[0];

            var params = _request$url$split2.slice(1);

            var url = path + '.json?auth=' + [token, params.join('?')].join('&');
            var init = {};
            ['method', 'headers', 'body', 'mode', 'credentials', 'cache', 'redirect', 'referrer', 'integrity'].forEach(function (prop) {
              return init[prop] = request[prop];
            });
            return fetch(url, init);
          }).then(function (response) {
            if (response.ok) {
              var contentType = response.headers.get('content-type');
              if (contentType && contentType.startsWith('application/json')) {
                return response.json();
              }
            }
            return null;
          }).then(function (data) {
            if (!data) {
              return null;
            }
            var isArray = Array.isArray(data);
            (isArray ? data : [data]).forEach(function (obj) {
              for (var key in obj) {
                obj[key][PRIMARY_KEY] = key;
              }
            });
            return data;
          });
        };
      }
    }]);

    return Firebase;
  }()) || _class);
});