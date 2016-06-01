import {Config} from '../../src/config';
import {Firebase} from '../../src/firebase';

describe('Firebase', () => {
  let config;

  beforeEach(() => {
    config = new Config();
  });

  it('firebase', () => {
    expect(() => firebase = new Firebase(config)).toThrowError(
        'Your API key is invalid, please check you have copied it correctly.');
  });
});
