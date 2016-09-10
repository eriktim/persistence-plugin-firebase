'use strict';

System.register(['console-polyfill', './firebase'], function (_export, _context) {
  "use strict";

  return {
    setters: [function (_consolePolyfill) {}, function (_firebase) {
      var _exportObj = {};
      _exportObj.Firebase = _firebase.Firebase;

      _export(_exportObj);
    }],
    execute: function () {}
  };
});