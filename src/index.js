import 'console-polyfill';

import {Config} from './config';
import {Firebase} from './firebase';

export default function(userConfig) {
  let config = Config.create(userConfig);
  let firebase = new Firebase(config);
  let baseUrl = config.databaseURL;
  return {
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
    fetchInterceptor: firebase.fetchInterceptor,
    set: {
      'firebase': firebase
    }
  };
}
