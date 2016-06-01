'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthenticationService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _aureliaLogging = require('aurelia-logging');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _firebase = require('./firebase');

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AuthenticationService = exports.AuthenticationService = (_dec = (0, _aureliaDependencyInjection.inject)(_firebase.Firebase), _dec(_class = function () {
  _createClass(AuthenticationService, [{
    key: 'interceptor',
    get: function get() {
      var _this = this;

      return function (request) {
        if (request instanceof Request) {
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
            return new Request(url, init);
          });
        }
        return Promise.resolve(request);
      };
    }
  }]);

  function AuthenticationService(firebase) {
    _classCallCheck(this, AuthenticationService);

    this.logger = (0, _aureliaLogging.getLogger)('AuthenticationService');
    this.firebase = firebase;
  }

  _createClass(AuthenticationService, [{
    key: 'getToken',
    value: function getToken() {
      var currentUser = this.firebase.native.auth().currentUser;
      return currentUser ? currentUser.getToken() : Promise.resolve();
    }
  }, {
    key: 'isLoggedIn',
    value: function isLoggedIn() {
      return !!this.firebase.native.auth().currentUser;
    }
  }, {
    key: 'login',
    value: function login(email, password) {
      var _this2 = this;

      this.logger.debug('trying to login...');
      return this.firebase.native.auth().signInWithEmailAndPassword(email, password).then(function (result) {
        _this2.logger.debug('user logged in successfully');
      }).catch(function (err) {
        var msg = 'authentication failed';
        _this2.logger.error(err);
        throw new Error(msg);
      });
    }
  }, {
    key: 'logout',
    value: function logout() {
      var _this3 = this;

      return this.firebase.native.auth().signOut().then(function () {
        return _this3.logger.debug('user logged out successfully');
      });
    }
  }]);

  return AuthenticationService;
}()) || _class);