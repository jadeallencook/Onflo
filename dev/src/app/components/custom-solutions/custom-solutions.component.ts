import { Component, OnInit, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import * as firebase from 'firebase';
import { StripeCheckoutLoader, StripeCheckoutHandler } from 'ng-stripe-checkout';
import * as $ from 'jquery';

@Component({
  selector: 'app-custom-solutions',
  templateUrl: './custom-solutions.component.html',
  styleUrls: ['./custom-solutions.component.css']
})

export class CustomSolutionsComponent implements OnInit {

  @Input() solutions: any = [];

  private stripeCheckoutHandler: StripeCheckoutHandler;
  private selectedDeal: any;
  private deal = {
    amount: 0,
    description: '',
    uid: ''
  };

  constructor(private stripeCheckoutLoader: StripeCheckoutLoader) {

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

  stripeCheckout(dealUID, price, title) {
    this.deal.amount = price * 100;
    this.deal.description = title;
    this.deal.uid = dealUID;
    this.stripeCheckoutHandler.open({
      amount: this.deal.amount,
      currency: 'USD',
      email: firebase.auth().currentUser.email,
      name: 'Onflo',
      description: this.deal.description
    });
  }

  formatDate(date) {
    date = new Date(date);
    return ((date.getDate() < 10) ? '0' : '') + date.getDate() + '/' + (((date.getMonth() + 1) < 10) ? '0' : '') + (date.getMonth() + 1) + '/' + date.getFullYear();
  }

  public ngAfterViewInit() {
    this.stripeCheckoutLoader.createHandler({
      key: 'pk_live_LCkKum9lsW57QiO8sHq2a2am',
      image: 'http://www.onflo.io/images/onflo-avatar.jpg',
      token: (token) => {
        // Do something with the token...
        $.ajax({
          method: 'post',
          url: 'http://onflo.io/api/stripe.php',
          data: {
            token: token.id,
            amount: this.deal.amount,
            desc: this.deal.description
          }
        }).done((data) => {
          if (data) {
            firebase.database().ref('deals/' + this.deal.uid).once('value', (snapshot) => {
              const tmpDeal = snapshot.val();
              tmpDeal.status = 'production';
              tmpDeal.start = new Date().toString();
              tmpDeal.stripeToken = token;
              firebase.database().ref('deals/' + this.deal.uid).set(tmpDeal);
            });
          }
        }).catch(() => {
          console.log('Failed to process payment');
        });
      }
    }).then((handler: StripeCheckoutHandler) => {
      this.stripeCheckoutHandler = handler;
    });
  }

  ngOnInit() {
  }

}
