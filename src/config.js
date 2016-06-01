let config = {
  apiKey: null,
  authDomain: null,
  databaseURL: null,
  storageBucket: null
};

export class Config {
  configure(userConfig) {
    for (let key in userConfig) {
      if (!Reflect.has(config, key)) {
        throw new Error(`unknown configuration key: ${key}`);
      }
      config[key] = userConfig[key];
    }
  }

  get current() {
    return Object.assign({}, config);
  }
}
