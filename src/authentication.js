export class Authentication {
  firebase;

  constructor(firebase) {
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
    console.debug('trying to sign in...');
    return this.firebase.native.auth().signInWithEmailAndPassword(email, password)
      .then(result => {
        console.debug('user signed in successfully');
      })
      .catch(err => {
        let msg = 'authentication failed';
        console.error(err);
        throw new Error(msg);
      });
  }

  signOut() {
    return this.firebase.native.auth().signOut()
      .then(() => console.debug('user signed out successfully'));
  }
}
