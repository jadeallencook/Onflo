import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import * as firebase from 'firebase';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  deals: any = [];
  activeDeal: any = false;
  client: any = false;

  dealTitle: string = '';
  dealMsg: string = '';
  dealAmount: number = null;
  dealDays: number = null;

  addingVideo: boolean = true;
  learningVideo: any = {
    video: '',
    title: '',
    keywords: '',
    category: 'social'
  };
  lessonAddedSuccess: boolean = false;
  lessonAddedFailure: boolean = false;

  constructor() { }

  showDeal(uid) {
    this.addingVideo = false;
    firebase.database().ref('deals/' + uid).once('value').then((snapshot) => {
      this.activeDeal = snapshot.val();
      if (this.activeDeal.title) {
        this.dealTitle = this.activeDeal.title;
      }
      if (this.activeDeal.objective) {
        this.dealMsg = this.activeDeal.objective;
      }
      if (this.activeDeal.amount) {
        this.dealAmount = this.activeDeal.amount;
      }
      if (this.activeDeal.days) {
        this.dealDays = this.activeDeal.days;
      }
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
    const today = new Date().toString();
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

  resetLessonDetails() {
    this.learningVideo = {
      video: '',
      title: '',
      keywords: '',
      category: 'social'
    };
  }

  addVideo() {
    if (this.learningVideo.video && this.learningVideo.title && this.learningVideo.keywords) {
      this.learningVideo.keywords = this.learningVideo.keywords.split(',');
      firebase.database().ref('lessons').push(this.learningVideo).then(() => {
        this.lessonAddedSuccess = true;
        this.resetLessonDetails();
      });
    } else {
      this.lessonAddedFailure = true;
    }
    const showMsg = setInterval(() => {
      this.lessonAddedFailure = false;
      this.lessonAddedSuccess = false;
      clearInterval(showMsg);
    }, 3000);

  }

  ngOnInit() {
    firebase.database().ref('deals/').on('value', (snapshot) => {
      if (snapshot.val()) {
        this.deals = Object.keys(snapshot.val()).map((key) => {
          const deal = snapshot.val()[key];
          deal.dealUID = key;
          return deal;
        });
      }
    });
  }

}
