import {Config} from './config';
export {AuthenticationService} from './authentication';

export function configure(aurelia, callback) {
  let config = new Config();
  if (typeof callback === 'function') {
    callback(config);
  }
}
