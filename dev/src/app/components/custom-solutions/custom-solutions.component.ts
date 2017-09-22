import { Component, OnInit, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import * as firebase from 'firebase';
import { StripeCheckoutLoader, StripeCheckoutHandler } from 'ng-stripe-checkout';
import { Http } from '@angular/http';

@Component({
  selector: 'app-custom-solutions',
  templateUrl: './custom-solutions.component.html',
  styleUrls: ['./custom-solutions.component.css']
})

export class CustomSolutionsComponent implements OnInit {

  @Input() solutions: any = [];

  private stripeCheckoutHandler: StripeCheckoutHandler;
  private selectedDeal: any;

  constructor(private stripeCheckoutLoader: StripeCheckoutLoader, private http: Http) {

  }

  formatSubmittedDate(date) {
    date = new Date(date);
    date = date.toDateString();
    date = date.substr(4);
    return date;
  }

  // charge user after 'approve' is clicked

  // delete deal from database
  removeDeal(deal) {
    firebase.database().ref('users/' + deal.userUID + '/deals/' + deal.dealUID).remove();
    const updatedDeal = deal;
    updatedDeal.status = 'removed';
    firebase.database().ref('deals/' + deal.dealUID).set(updatedDeal);
  }

  ngOnChanges() {
    for (let x = 0, max = this.solutions.length; x < max; x++) {
      const solution = this.solutions[x];
    }
  }

  getDaysLeft(date, days) {
    date = new Date(date);
    const endDate: any = new Date(date);
    endDate.setDate(date.getDate() + days);
    let daysLeft = Math.round((endDate - date) / (1000 * 60 * 60 * 24));
    if (daysLeft < 0) {
      daysLeft = 0;
    }
    return daysLeft;
  }

  formatDate(date) {
    date = new Date(date);
    return ((date.getDate() < 10) ? '0' : '') + date.getDate() + '/' + (((date.getMonth() + 1) < 10) ? '0' : '') + (date.getMonth() + 1) + '/' + date.getFullYear();
  }

  ngOnInit() {
    this.stripeCheckoutLoader.createHandler({
      key: 'pk_test_g7IXNmaPSC72rjf8KRHNgnOk',
      email: firebase.auth().currentUser.email,
      token: (token) => {
        // after deal is paid...
        const deal = this.selectedDeal;
        deal.stripeID = token.id;
        deal.status = 'production';
        deal.started = new Date().toString();
        const stripeAPI = 'http://onflo.io/api/stripe.php';
        const postOptions = { token: token.id, desc: deal.title, amount: (deal.amount * 100) };
        console.log(postOptions);
        // firebase.database().ref('deals/' + this.selectedDeal.dealUID).set(deal);
        this.http.post(stripeAPI, postOptions).subscribe((res) => {
          console.log(res['_body']);
        });
      },
    }).then((handler: StripeCheckoutHandler) => {
      this.stripeCheckoutHandler = handler;
    });
  }

}
