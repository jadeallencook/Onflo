import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from '../../services/firebase-auth/firebase-auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  business:string = '';
  phone:string = '';
  website:string = '';
  slack:string = '';
  changesSaved:boolean = false;

  constructor(private FirebaseAuthService: FirebaseAuthService) {
    firebase.database().ref('users/' + this.FirebaseAuthService.ActiveUser.uid).on('value', (snapshot) => {
      let user = snapshot.val();
      if (user.business) this.business = user.business;
      if (user.phone) this.phone = user.phone;
      if (user.website) this.website = user.website;
      if (user.slack) this.slack = user.slack;
    });
  }

  saveChanges() {
    let date = new Date().toString();
    firebase.database().ref('users/' + this.FirebaseAuthService.ActiveUser.uid).set({
      updated: date,
      business: this.business,
      phone: this.phone,
      website: this.website,
      slack: this.slack
    }).then(() => {
      this.changesSaved = true;
      let successMsgOn = setInterval(() => {
        this.changesSaved = false;
        clearInterval(successMsgOn);
      }, 5000);
    });
  }

  ngOnInit() {
  }

}
