import * as ns from '../../src/index';

describe('index', () => {
  it('AuthenticationService', () => {
    expect(typeof ns.AuthenticationService).toEqual('function');
  });

  it('configure', () => {
    expect(typeof ns.configure).toEqual('function');
  });
});
