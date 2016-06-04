import {AuthenticationService} from '../../src/authentication';

const CREDENTIALS = ['foo', 'bar'];
const TOKEN = 'someUserToken';

function throwError() {
  throw new Error();
}

class CurrentUserStub {
  constructor() {
    spyOn(this, 'getToken').and.callThrough();
  }

  getToken() {
    return Promise.resolve(TOKEN);
  }
}

class NativeStub {
  authStub = {
    currentUser: null,
    signInWithEmailAndPassword: function(username, password) {
      let loggedIn = username === CREDENTIALS[0] && password === CREDENTIALS[1];
      this.currentUser = loggedIn ? new CurrentUserStub() : null;
      return loggedIn ? Promise.resolve() : Promise.reject();
    },
    signOut: function() {
      this.currentUser = null;
      return Promise.resolve();
    }
  };

  constructor() {
    spyOn(this.authStub, 'signInWithEmailAndPassword').and.callThrough();
    spyOn(this.authStub, 'signOut').and.callThrough();
  }

  auth() {
    return this.authStub;
  }
}

class FirebaseStub {
  native;

  constructor() {
    this.native = new NativeStub();
  }
}

describe('authentication', () => {
  let authenticationService;
  let mockedFirebase;

  beforeEach(() => {
    mockedFirebase = new FirebaseStub();
    authenticationService = new AuthenticationService(mockedFirebase);
  });

  it('getToken', () => {
    return Promise.resolve()
      .then(() => {
        return authenticationService.getToken();
      })
      .then(token => {
        expect(token).toBeUndefined();
        return authenticationService.login(...CREDENTIALS)
          .then(() => authenticationService.getToken());
      })
      .then(token => {
        expect(token).toEqual(TOKEN);
        expect(mockedFirebase.native.authStub.currentUser.getToken)
            .toHaveBeenCalledWith();
        return authenticationService.logout()
          .then(() => authenticationService.getToken());
      })
      .then(token => {
        expect(token).toBeUndefined();
      });
  });

  it('isLoggedIn', () => {
    expect(authenticationService.isLoggedIn()).toBeFalsy();
    return Promise.resolve()
      .then(() => {
        return authenticationService.login(...CREDENTIALS);
      })
      .then(() => {
        expect(authenticationService.isLoggedIn()).toBeTruthy();
        return authenticationService.logout();
      })
      .then(() => {
        expect(authenticationService.isLoggedIn()).toBeFalsy();
      });
  });

  it('login', () => {
    let badCredentials = ['baz', 'boo'];
    return Promise.resolve()
      .then(() => {
        return authenticationService.login(...CREDENTIALS);
      })
      .then(() => {
        expect(mockedFirebase.native.authStub.signInWithEmailAndPassword)
            .toHaveBeenCalledWith(...CREDENTIALS);
        return authenticationService.login(...badCredentials);
      })
      .then(throwError, () => {
        expect(mockedFirebase.native.authStub.signInWithEmailAndPassword)
            .toHaveBeenCalledWith(...badCredentials);
      });
  });

  it('logout', () => {
    return authenticationService.logout()
      .then(() => {
        expect(mockedFirebase.native.authStub.signOut).toHaveBeenCalledWith();
      });
  });
});
