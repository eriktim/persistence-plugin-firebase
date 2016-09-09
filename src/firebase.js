import 'firebase';

import {Authentication} from './authentication';
import {Config} from './config';

const PRIMARY_KEY = '__id__';

export class Firebase {
  authentication;
  native;
  url;

  constructor(config) {
    this.url = config.databaseURL;
    this.native = firebase;
    this.native.initializeApp(config.current);
    this.authentication = new Authentication(this);
  }

  get interceptor() {
    return request => {
      if (!(request instanceof Request)) {
        return Promise.resolve(request);
      }
      return this.authentication.getToken()
        .then(token => {
          let [path, ...params] = request.url.split('?');
          let url = `${path}.json?auth=${[token, params.join('?')].join('&')}`;
          let init = {};
          ['method', 'headers', 'mode', 'credentials',
            'cache', 'redirect', 'referrer', 'integrity']
              .forEach(prop => init[prop] = request[prop]);
          return request.blob().then(blob => {
            init.body = blob;
            return fetch(url, init);
          });
        })
        .then(response => {
          if (response.ok) {
            let contentType = response.headers.get('content-type');
            if (contentType && contentType.startsWith('application/json')) {
              return response.json();
            }
          }
          return null;
        })
        .catch(err => console.error('request failed', err))
        .then(data => {
          if (!data) {
            return null;
          }
          let isArray = Array.isArray(data);
          (isArray ? data : [data]).forEach(obj => {
            for (let key in obj) {
              let value = obj[key];
              if (typeof value === 'object' && value) {
                value[PRIMARY_KEY] = key;
              }
            }
          });
          return data;
        });
    };
  }

  isSignedIn(...args) {
    return this.authentication.isSignedIn(...args);
  }

  signIn(...args) {
    return this.authentication.signIn(...args);
  }

  signOut(...args) {
    return this.authentication.signOut(...args);
  }
}
