import 'firebase';

import {Authentication} from './authentication';
import {Config} from './config';

const PRIMARY_KEY = '__id__';

export class Firebase {
  authentication;
  native;
  url;

  constructor(userConfig) {
    let config = Config.create(userConfig);
    this.url = config.databaseURL;
    this.native = firebase;
    this.native.initializeApp(config);
    this.authentication = new Authentication(this);
  }

  get fetchInterceptor() {
    return (url, init) => {
      let [fullUri, ...params] = url.split('?');
      return this.authentication.getToken()
        .then(token => {
          let url = fullUri + '.json?auth=' + [token, params.join('?')].join('&');
          return fetch(url, init);
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
              if (typeof value === 'object' && value !== null) {
                value[PRIMARY_KEY] = key;
              }
            }
          });
          return data;
        });
    };
  }

  getPlugin() {
    let baseUrl = this.url;
    return {
      name: 'firebase',
      config: {
        baseUrl,
        queryEntityMapperFactory: Entity => {
          return data => {
            let map = new Map();
            for (let key in data) {
              map.set(data[key], Entity);
            }
            return map;
          };
        },
        fetchInterceptor: this.fetchInterceptor
      }
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
