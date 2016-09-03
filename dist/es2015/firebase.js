var _dec, _class;

import { inject } from 'aurelia-dependency-injection';
import 'firebase';

import { Authentication } from './authentication';
import { Config } from './config';

const PRIMARY_KEY = '_id';

export let Firebase = (_dec = inject(Config), _dec(_class = class Firebase {

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
      return this.getToken().then(token => {
        let [path, ...params] = request.url.split('?');
        let url = `${ path }.json?auth=${ [token, params.join('?')].join('&') }`;
        let init = {};
        ['method', 'headers', 'body', 'mode', 'credentials', 'cache', 'redirect', 'referrer', 'integrity'].forEach(prop => init[prop] = request[prop]);
        return fetch(url, init);
      }).then(response => {
        if (response.ok) {
          let contentType = response.headers.get('content-type');
          if (contentType && contentType.startsWith('application/json')) {
            return response.json();
          }
        }
        return null;
      }).then(data => {
        if (!data) {
          return null;
        }
        let isArray = Array.isArray(data);
        (isArray ? data : [data]).forEach(obj => {
          for (let key in obj) {
            obj[key][PRIMARY_KEY] = key;
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
}) || _class);