define(['exports'], function (exports) {
  'use strict';

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

  var Authentication = exports.Authentication = function () {
    function Authentication(firebase) {
      _classCallCheck(this, Authentication);

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
        console.debug('trying to sign in...');
        return this.firebase.native.auth().signInWithEmailAndPassword(email, password).then(function (result) {
          console.debug('user signed in successfully');
        }).catch(function (err) {
          var msg = 'authentication failed';
          console.error(err);
          throw new Error(msg);
        });
      }
    }, {
      key: 'signOut',
      value: function signOut() {
        return this.firebase.native.auth().signOut().then(function () {
          return console.debug('user signed out successfully');
        });
      }
    }]);

    return Authentication;
  }();
});