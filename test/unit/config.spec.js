import {Config} from '../../src/config';

describe('Config', () => {
  let config;

  beforeEach(() => {
    config = new Config();
  });

  it('configure', () => {
    expect(typeof config.configure).toEqual('function');
  });
});
