import * as ns from '../../src/index';
import {AuthenticationService} from '../../src/authentication';
import {Config} from '../../src/config';

describe('index', () => {
  it('AuthenticationService', () => {
    expect(ns.AuthenticationService).toEqual(AuthenticationService);
  });

  it('configure', () => {
    let callback = jasmine.createSpy('callback');
    ns.configure(null, callback);
    expect(callback).toHaveBeenCalledWith(jasmine.any(Config));
  });
});
