import {Config} from './config';

export {Firebase} from './firebase';

const baseConfig = {
  apiKey: null,
  authDomain: null,
  databaseURL: null,
  storageBucket: null
};

export function configure(aurelia, callback) {
  let config = new Config();
  config.configure(baseConfig);
  if (typeof callback === 'function') {
    callback(config);
  }
}
