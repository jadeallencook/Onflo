import { Component, OnInit, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import * as firebase from 'firebase';
import { StripeCheckoutLoader, StripeCheckoutHandler } from 'ng-stripe-checkout';

@Component({
  selector: 'app-custom-solutions',
  templateUrl: './custom-solutions.component.html',
  styleUrls: ['./custom-solutions.component.css']
})

export class CustomSolutionsComponent implements OnInit {

  @Input() solutions: any = [];

  private stripeCheckoutHandler: StripeCheckoutHandler;
  private selectedDeal: any;

  constructor(private stripeCheckoutLoader: StripeCheckoutLoader) {

  }

  formatSubmittedDate(date) {
    date = new Date(date);
    date = date.toDateString();
    date = date.substr(4);
    return date;
  }

  // charge user after 'approve' is clicked
  approveDeal(deal) {
    this.selectedDeal = deal;
    this.stripeCheckoutHandler.open({
      amount: (deal.amount * 100),
      name: deal.title,
      description: deal.objective,
      currency: 'USD',
      image: 'http://www.onflo.io/images/onflo-avatar.jpg'
    });
  }

  // delete deal from database
  removeDeal(deal) {
    firebase.database().ref('users/' + deal.userUID + '/deals/' + deal.dealUID).remove();
    let updatedDeal = deal;
    updatedDeal.status = 'removed';
    firebase.database().ref('deals/' + deal.dealUID).set(updatedDeal);
  }

  ngOnChanges() {
    for (let x = 0, max = this.solutions.length; x < max; x++) {
      let solution = this.solutions[x];
    }
  }

  ngOnInit() {
    this.stripeCheckoutLoader.createHandler({
      key: 'pk_live_LCkKum9lsW57QiO8sHq2a2am',
      email: firebase.auth().currentUser.email,
      token: (token) => {
        // after deal is paid...
        let deal = this.selectedDeal;
        deal.stripeID = token.id;
        deal.status = 'production';
        deal.started = new Date().toString();
        // update deal in firebase
        firebase.database().ref('deals/' + this.selectedDeal.dealUID).set(deal).then(() => {
          console.log('Complete!');
        });
      },
    }).then((handler: StripeCheckoutHandler) => {
      this.stripeCheckoutHandler = handler;
    });
  }

}
