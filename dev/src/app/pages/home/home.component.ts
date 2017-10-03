import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from '../../services/firebase-auth/firebase-auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private FirebaseAuthService: FirebaseAuthService) {}

  isAdmin() {
    if (firebase.auth().currentUser.email !== 'hello@onflo.io') {
      return false;
    }
    return true;
  }

  ngOnInit() {
  }

}
