export let Config = class Config {
  static create(userConfig) {
    return new Config(userConfig);
  }

  constructor(userConfig) {
    let config = {
      apiKey: null,
      authDomain: null,
      databaseURL: null,
      storageBucket: null
    };
    for (let key in userConfig) {
      if (!Reflect.has(config, key)) {
        throw new Error(`unknown configuration key: ${ key }`);
      }
      config[key] = userConfig[key];
    }
    return config;
  }
};