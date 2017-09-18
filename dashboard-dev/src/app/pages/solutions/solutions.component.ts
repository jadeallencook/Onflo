import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { FirebaseAuthService } from '../../services/firebase-auth/firebase-auth.service';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent implements OnInit {

  solutions: any = [];

  constructor(private FirebaseAuthService: FirebaseAuthService) { }

  ngOnInit() {
    // get deals for user
    let userUID = this.FirebaseAuthService.ActiveUser.uid;
    firebase.database().ref('users/' + userUID + '/deals').on('value', (deals) => {
      // add each deal
      if (deals.val()) {
        this.solutions = [];
        deals = deals.val();
        Object.keys(deals).map((objectKey, index) => {
          // check if deal is active
          let isActive = deals[objectKey].active;
          if (isActive) {
            // add deal to solutions
            firebase.database().ref('deals/' + objectKey).once('value').then((deal) => {
              deal = deal.val();
              if (deal) this.solutions.push(deal);
            });
          }
        });
      } else {
        this.solutions = false;
      }
    });
  }

}
