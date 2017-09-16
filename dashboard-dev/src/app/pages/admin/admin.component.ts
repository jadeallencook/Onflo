import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import * as firebase from 'firebase';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  deals:any;
  activeDeal:any = false;
  client:any = false;

  constructor() { }

  showDeal(uid) {
    firebase.database().ref('issues/' + uid).once('value').then((snapshot) => {
      this.activeDeal = snapshot.val();
    }).then(() => {
      firebase.database().ref('users/' + this.activeDeal.uid).once('value').then((snapshot) => {
        this.client = snapshot.val();
      });
    });
  }

  removeDeal(uid) {
    console.log(uid);
  }

  ngOnInit() {
    firebase.database().ref('issues/').once('value').then((snapshot) => {
      this.deals = Object.keys(snapshot.val()).map((key) => {
        let deal = snapshot.val()[key];
        deal.dealUID = key;
        return deal;
      });
    });
  }

}
