'use strict';

System.register(['aurelia-dependency-injection', 'firebase', './authentication', './config'], function (_export, _context) {
  "use strict";

  var inject, Authentication, Config, _createClass, _dec, _class, PRIMARY_KEY, Firebase;

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
    }, function (_firebase) {}, function (_authentication3) {
      Authentication = _authentication3.Authentication;
    }, function (_config) {
      Config = _config.Config;
    }],
    execute: function () {
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

          this.url = config.databaseURL;
          this.native = firebase;
          this.native.initializeApp(config.current);
          this.authentication = new Authentication(this);
        }

        _createClass(Firebase, [{
          key: 'signIn',
          value: function signIn() {
            var _authentication;

            return (_authentication = this.authentication).signIn.apply(_authentication, arguments);
          }
        }, {
          key: 'signOut',
          value: function signOut() {
            var _authentication2;

            return (_authentication2 = this.authentication).signOut.apply(_authentication2, arguments);
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
      }()) || _class));

      _export('Firebase', Firebase);
    }
  };
});