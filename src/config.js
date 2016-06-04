let baseConfig = {
  apiKey: null,
  authDomain: null,
  databaseURL: null,
  storageBucket: null
};
let config = Object.assign({}, baseConfig);

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
    let current = {};
    Object.assign(current, config);
    Object.freeze(current);
    return current;
  }
}

export function resetGlobalConfigForTesting() {
  config = Object.assign({}, baseConfig);
}
