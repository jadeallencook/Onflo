import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import * as firebase from 'firebase';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  deals: any;
  activeDeal: any = false;
  client: any = false;

  dealTitle:string = '';
  dealMsg:string = '';
  dealAmount:number = null;
  dealDays:number = null;

  constructor() { }

  showDeal(uid) {
    firebase.database().ref('deals/' + uid).once('value').then((snapshot) => {
      this.activeDeal = snapshot.val();
      if (this.activeDeal.title) this.dealTitle = this.activeDeal.title;
      if (this.activeDeal.objective) this.dealMsg = this.activeDeal.objective;
      if (this.activeDeal.amount) this.dealAmount = this.activeDeal.amount;
      if (this.activeDeal.days) this.dealDays = this.activeDeal.days;
      this.activeDeal.dealUID = uid;
    }).then(() => {
      firebase.database().ref('users/' + this.activeDeal.userUID).once('value').then((snapshot) => {
        this.client = snapshot.val();
      });
    });
  }

  removeDeal(dealUID, userUID) {
    firebase.database().ref('deals/' + dealUID).remove();
    firebase.database().ref('users/' + userUID + '/deals/' + dealUID).remove();
  }

  sendDeal() {
    let today = new Date().toString();
    firebase.database().ref('deals/' + this.activeDeal.dealUID).set({
      title: this.dealTitle,
      objective: this.dealMsg,
      amount: this.dealAmount,
      days: this.dealDays,
      date: today,
      userUID: this.activeDeal.userUID,
      dealUID: this.activeDeal.dealUID,
      submitted: this.activeDeal.submitted,
      issue: this.activeDeal.issue,
      status: 'pending'
    }).then(() => {
      firebase.database().ref('users/' + this.activeDeal.userUID + '/deals/' + this.activeDeal.dealUID).set({
        active: true
      });
      this.activeDeal = false;
    });
  }

  ngOnInit() {
    firebase.database().ref('deals/').on('value', (snapshot) => {
      if (snapshot.val()) {
        this.deals = Object.keys(snapshot.val()).map((key) => {
          let deal = snapshot.val()[key];
          deal.dealUID = key;
          return deal;
        });
      }
    });
  }

}
