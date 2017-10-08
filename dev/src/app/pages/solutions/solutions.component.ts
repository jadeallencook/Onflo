import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent implements OnInit {

  solutions: any = [];

  constructor() { }

  ngOnInit() {
    // get deals for user
    firebase.database().ref('users/' + firebase.auth().currentUser.uid + '/deals').on('value', (deals) => {
      // add each deal
      if (deals.val()) {
        this.solutions = [];
        deals = deals.val();
        Object.keys(deals).map((objectKey, index) => {
          // check if deal is active
          const isActive = deals[objectKey].active;
          if (isActive) {
            // add deal to solutions
            firebase.database().ref('deals/' + objectKey).on('value', (deal) => {
              deal = deal.val();
              if (deal) {
                this.solutions.push(deal);
              }
            });
          }
        });
      } else {
        this.solutions = false;
      }
    });
  }

}
