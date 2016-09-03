'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-logging', 'firebase', './authentication', './config'], function (_export, _context) {
  "use strict";

  var inject, getLogger, Authentication, Config, _typeof, _createClass, _dec, _class, PRIMARY_KEY, Firebase;

  function _toArray(arr) {
    return Array.isArray(arr) ? arr : Array.from(arr);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaLogging) {
      getLogger = _aureliaLogging.getLogger;
    }, function (_firebase) {}, function (_authentication4) {
      Authentication = _authentication4.Authentication;
    }, function (_config) {
      Config = _config.Config;
    }],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };

      _createClass = function () {
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

      PRIMARY_KEY = '_id';

      _export('Firebase', Firebase = (_dec = inject(Config), _dec(_class = function () {
        function Firebase(config) {
          _classCallCheck(this, Firebase);

          this.logger = getLogger('Firebase');
          this.url = config.databaseURL;
          this.native = firebase;
          this.native.initializeApp(config.current);
          this.authentication = new Authentication(this);
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
              return _this.authentication.getToken().then(function (token) {
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
              }).catch(function (err) {
                return _this.logger.error('request failed', err);
              }).then(function (data) {
                if (!data) {
                  return null;
                }
                var isArray = Array.isArray(data);
                (isArray ? data : [data]).forEach(function (obj) {
                  for (var key in obj) {
                    var value = obj[key];
                    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value) {
                      value[PRIMARY_KEY] = key;
                    }
                  }
                });
                return data;
              });
            };
          }
        }]);

        return Firebase;
      }()) || _class));

      _export('Firebase', Firebase);
    }
  };
});