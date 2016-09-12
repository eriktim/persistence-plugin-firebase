'use strict';

System.register(['firebase', './authentication', './config'], function (_export, _context) {
  "use strict";

  var Authentication, Config, _typeof, _createClass, PRIMARY_KEY, Firebase;

  function _toArray(arr) {
    return Array.isArray(arr) ? arr : Array.from(arr);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_firebase) {}, function (_authentication4) {
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

      PRIMARY_KEY = '__id__';

      _export('Firebase', Firebase = function () {
        function Firebase(userConfig) {
          _classCallCheck(this, Firebase);

          var config = Config.create(userConfig);
          this.url = config.databaseURL;
          this.native = firebase;
          this.native.initializeApp(config);
          this.authentication = new Authentication(this);
        }

        _createClass(Firebase, [{
          key: 'getPlugin',
          value: function getPlugin() {
            var baseUrl = this.url;
            return {
              name: 'firebase',
              config: {
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
                fetchInterceptor: this.fetchInterceptor
              }
            };
          }
        }, {
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
          key: 'fetchInterceptor',
          get: function get() {
            var _this = this;

            return function (url, init) {
              var _url$split = url.split('?');

              var _url$split2 = _toArray(_url$split);

              var fullUri = _url$split2[0];

              var params = _url$split2.slice(1);

              return _this.authentication.getToken().then(function (token) {
                var url = fullUri + '.json?auth=' + [token, params.join('?')].join('&');
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
                return console.error('request failed', err);
              }).then(function (data) {
                if (!data) {
                  return null;
                }
                var isArray = Array.isArray(data);
                (isArray ? data : [data]).forEach(function (obj) {
                  for (var key in obj) {
                    var value = obj[key];
                    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value !== null) {
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
      }());

      _export('Firebase', Firebase);
    }
  };
});