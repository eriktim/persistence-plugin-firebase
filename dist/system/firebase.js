'use strict';

System.register(['aurelia-dependency-injection', 'firebase', './config'], function (_export, _context) {
  "use strict";

  var inject, Config, _dec, _class, Firebase;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_firebase) {}, function (_config) {
      Config = _config.Config;
    }],
    execute: function () {
      _export('Firebase', Firebase = (_dec = inject(Config), _dec(_class = function Firebase(config) {
        _classCallCheck(this, Firebase);

        this.url = config.databaseURL;
        this.native = firebase;
        this.native.initializeApp(config.current);
      }) || _class));

      _export('Firebase', Firebase);
    }
  };
});