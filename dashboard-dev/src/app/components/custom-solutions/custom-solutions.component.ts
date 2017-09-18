import { Component, OnInit, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import * as firebase from 'firebase';

@Component({
  selector: 'app-custom-solutions',
  templateUrl: './custom-solutions.component.html',
  styleUrls: ['./custom-solutions.component.css']
})
export class CustomSolutionsComponent implements OnInit {
  @Input() solutions:any = [];
  constructor() {
  }

  formatSubmittedDate(date) {
    date = new Date(date);
    date = date.toDateString();
    date = date.substr(4);
    return date;
  }

  approveDeal(deal) {
    console.log(deal);
  }

  removeDeal(deal) {
    firebase.database().ref('users/' + deal.userUID + '/deals/' + deal.dealUID).remove();
    firebase.database().ref('deals/' + deal.dealUID).set({
      status: 'removed'
    });
  }

  ngOnChanges() {
    for(let x = 0, max = this.solutions.length; x < max; x++) {
      let solution = this.solutions[x];
    }
  }

  ngOnInit() {
  }

}
