import {inject} from 'aurelia-dependency-injection';
import 'firebase';
import {Config} from './config';

@inject(Config)
export class Firebase {
  native;
  url;

  constructor(config) {
    this.url = config.databaseURL;
    this.native = firebase;
    this.native.initializeApp(config.current);
  }
}
