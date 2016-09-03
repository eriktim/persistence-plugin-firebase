import {getLogger} from 'aurelia-logging';

export class Authentication {
  firebase;
  logger;

  constructor(firebase) {
    this.logger = getLogger('Authentication');
    this.firebase = firebase;
  }

  getToken() {
    let currentUser = this.firebase.native.auth().currentUser;
    return currentUser ? currentUser.getToken() : Promise.resolve();
  }

  isSignedIn() {
    return !!this.firebase.native.auth().currentUser;
  }

  signIn(email, password) {
    this.logger.debug('trying to login...');
    return this.firebase.native.auth().signInWithEmailAndPassword(email, password)
      .then(result => {
        this.logger.debug('user logged in successfully');
      })
      .catch(err => {
        let msg = 'authentication failed';
        this.logger.error(err);
        throw new Error(msg);
      });
  }

  signOut() {
    return this.firebase.native.auth().signOut()
      .then(() => this.logger.debug('user logged out successfully'));
  }
}
