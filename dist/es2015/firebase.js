import 'firebase';

import { Authentication } from './authentication';
import { Config } from './config';

const PRIMARY_KEY = '__id__';

export let Firebase = class Firebase {

  constructor(userConfig) {
    let config = Config.create(userConfig);
    this.url = config.databaseURL;
    this.native = firebase;
    this.native.initializeApp(config);
    this.authentication = new Authentication(this);
  }

  get fetchInterceptor() {
    return request => {
      if (!(request instanceof Request)) {
        return Promise.resolve(request);
      }
      return this.authentication.getToken().then(token => {
        let [path, ...params] = request.url.split('?');
        let url = `${ path }.json?auth=${ [token, params.join('?')].join('&') }`;
        let init = {};
        ['method', 'headers', 'mode', 'credentials', 'cache', 'redirect', 'referrer', 'integrity'].forEach(prop => init[prop] = request[prop]);
        return Promise.resolve().then(() => {
          if (!['GET', 'HEAD'].includes(request.method)) {
            return request.blob();
          }
        }).then(blob => {
          if (blob) {
            init.body = blob;
          }
          return fetch(url, init);
        });
      }).then(response => {
        if (response.ok) {
          let contentType = response.headers.get('content-type');
          if (contentType && contentType.startsWith('application/json')) {
            return response.json();
          }
        }
        return null;
      }).catch(err => console.error('request failed', err)).then(data => {
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
};