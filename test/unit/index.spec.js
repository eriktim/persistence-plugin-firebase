import * as ns from '../../src/index';

describe('index', () => {
  it('Authentication', () => {
    expect(typeof ns.Authentication).toEqual('function');
  });

  it('Firebase', () => {
    expect(typeof ns.Firebase).toEqual('function');
  });

  it('configure', () => {
    expect(typeof ns.configure).toEqual('function');
  });
});
