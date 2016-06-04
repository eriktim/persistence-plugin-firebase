import {Config, resetGlobalConfigForTesting} from '../../src/config';

describe('Config', () => {
  let config;

  beforeEach(() => {
    config = new Config();
  });

  it('configure', () => {
    expect(config.current.apiKey).toBeNull();
    expect(() => config.configure({foo: 'bar'})).toThrowError();
    expect(config.current.apiKey).toBeNull();
    expect(() => config.configure({apiKey: 'key'})).not.toThrow();
    expect(config.current.apiKey).toEqual('key');
  });

  it('current', () => {
    let current = config.current;
    expect(current).toEqual({
      apiKey: null,
      authDomain: null,
      databaseURL: null,
      storageBucket: null
    });
    expect(() => current.apiKey = 'key').toThrow();
    expect(current.apiKey).toBeNull();
    config.configure({apiKey: 'key'});
    expect(current.apiKey).toBeNull();
    expect(config.current.apiKey).toEqual('key');
  });

  afterEach(() => {
    resetGlobalConfigForTesting();
  });
});
