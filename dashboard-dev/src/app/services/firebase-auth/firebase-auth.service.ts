import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class FirebaseAuthService {

  ActiveUser: any = false;
  errorMsg: string = '';

  constructor(public AngularFireAuth: AngularFireAuth) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) this.ActiveUser = user;
      else this.ActiveUser = false;
    });
  }

  // firebase

  createAccount(email: string, password: string) {
    this.AngularFireAuth.auth.createUserWithEmailAndPassword(email, password).then(() => {
      this.login(email, password);
      firebase.auth().onAuthStateChanged((user) => {
        let date = new Date().toString();
        firebase.database().ref('users/' + user.uid).set({
          created: date
        });
      });
    }).catch((error) => {
      this.errorMsg = error.message;
    });
  }

  login(email: string, password: string) {
    this.AngularFireAuth.auth.signInWithEmailAndPassword(email, password).catch((error) => {
      this.errorMsg = error.message;
    });
  }

  logout() {
    this.AngularFireAuth.auth.signOut().catch((error) => {
      this.errorMsg = error.message;
    });
  }
}
