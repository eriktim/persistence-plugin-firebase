'use strict';

System.register(['aurelia-logging'], function (_export, _context) {
  "use strict";

  var getLogger, _createClass, Authentication;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaLogging) {
      getLogger = _aureliaLogging.getLogger;
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

      _export('Authentication', Authentication = function () {
        function Authentication(firebase) {
          _classCallCheck(this, Authentication);

          this.logger = getLogger('Authentication');
          this.firebase = firebase;
        }

        _createClass(Authentication, [{
          key: 'getToken',
          value: function getToken() {
            var currentUser = this.firebase.native.auth().currentUser;
            return currentUser ? currentUser.getToken() : Promise.resolve();
          }
        }, {
          key: 'isSignedIn',
          value: function isSignedIn() {
            return !!this.firebase.native.auth().currentUser;
          }
        }, {
          key: 'signIn',
          value: function signIn(email, password) {
            var _this = this;

            this.logger.debug('trying to login...');
            return this.firebase.native.auth().signInWithEmailAndPassword(email, password).then(function (result) {
              _this.logger.debug('user logged in successfully');
            }).catch(function (err) {
              var msg = 'authentication failed';
              _this.logger.error(err);
              throw new Error(msg);
            });
          }
        }, {
          key: 'signOut',
          value: function signOut() {
            var _this2 = this;

            return this.firebase.native.auth().signOut().then(function () {
              return _this2.logger.debug('user logged out successfully');
            });
          }
        }]);

        return Authentication;
      }());

      _export('Authentication', Authentication);
    }
  };
});