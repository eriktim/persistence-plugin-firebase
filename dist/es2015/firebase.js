var _dec, _class;

import { inject } from 'aurelia-dependency-injection';
import 'firebase';
import { Config } from './config';

export let Firebase = (_dec = inject(Config), _dec(_class = class Firebase {

  constructor(config) {
    this.url = config.databaseURL;
    this.native = firebase;
    this.native.initializeApp(config.current);
  }
}) || _class);