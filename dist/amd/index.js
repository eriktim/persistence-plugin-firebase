define(['exports', './firebase', 'console-polyfill'], function (exports, _firebase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Firebase = undefined;
  Object.defineProperty(exports, 'Firebase', {
    enumerable: true,
    get: function () {
      return _firebase.Firebase;
    }
  });
});