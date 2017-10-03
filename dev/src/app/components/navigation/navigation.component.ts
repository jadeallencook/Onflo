import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { FirebaseAuthService } from '../../services/firebase-auth/firebase-auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  unreadMsgs: boolean = false;
  loggedIn: boolean = false;
  userEmail: string;

  constructor(private FirebaseAuthService: FirebaseAuthService) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.userEmail = user.email;
        this.loggedIn = true;
        firebase.database().ref('unread/' + user.uid).on('value', (snapshot) => {
          if (snapshot.val()) {
            this.unreadMsgs = snapshot.val().user;
          }
        });
      }
    });
  }

  ngOnInit() {
  }

}
