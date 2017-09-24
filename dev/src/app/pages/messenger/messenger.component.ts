import { Component, OnInit, Input } from '@angular/core';
import * as firebase from 'firebase';
import * as $ from 'jQuery';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit {

  messages: Array<{}> = [];
  message: string = '';
  initMsgsLoad: boolean = true;
  pageIsActive: boolean = false;

  sendMessage() {
    const now = new Date().toString();
    let who: string;
    let userUID: string;
    if (this.route.snapshot.params['userUID'] && firebase.auth().currentUser.email === 'hello@onflo.io') {
      userUID = this.route.snapshot.params['userUID'];
    } else {
      userUID = firebase.auth().currentUser.uid;
    }
    firebase.database().ref('unread/' + userUID).once('value', (snapshot) => {
      let unreadByWhom: any;
      if (!snapshot.val()) {
        console.log(snapshot.val());
         unreadByWhom = snapshot.val();
      } else {
        unreadByWhom = {
          onflo: true,
          user: true
        };
      }
      if (this.route.snapshot.params['userUID'] && firebase.auth().currentUser.email === 'hello@onflo.io') {
        who = 'onflo';
        userUID = this.route.snapshot.params['userUID'];
        unreadByWhom.onflo = false;
      } else {
        who = 'you';
        userUID = firebase.auth().currentUser.uid;
        unreadByWhom.user = false;
      }
      firebase.database().ref('messages/' + userUID).push({
        who: who,
        what: this.message,
        when: now
      });
      firebase.database().ref('unread/' + userUID).set(unreadByWhom);
      $('#chatroom-container').animate({
        scrollTop: $('#msgs-container').height()
      }, 'slow');
      this.message = '';
    });
  }

  snapshotToArray(snapshot) {
    const returnArr = [];
    snapshot.forEach(function (childSnapshot) {
      const item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
    });
    return returnArr;
  }

  formatDate(date) {
    date = new Date(date);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const strTime = hours + ':' + minutes + ' ' + ampm;
    return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear() + ' ' + strTime;
  }

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.pageIsActive = true;
    let userUID: string;
    const unreadByWhom: any = {
      user: true,
      onflo: true
    };
    if (this.route.snapshot.params['userUID']) {
      userUID = this.route.snapshot.params['userUID'];
    } else {
      userUID = firebase.auth().currentUser.uid;
    }
    if (this.route.snapshot.params['userUID']) {
      unreadByWhom['onflo'] = false;
    } else {
      console.log(this.route.snapshot['_routeConfig'].path);
      unreadByWhom['user'] = false;
    }
    firebase.database().ref('messages/' + userUID).on('value', (snapshot) => {
      if (!snapshot.val()) {
        const now = new Date().toString();
        firebase.database().ref('messages/' + userUID).push({
          who: 'onflo',
          what: 'Welcome to Onflo messenger! If you need help navigating your dashboard or need advice for an upcoming project, you can message us here and we\'ll get back with you ASAP.',
          when: now
        });
      } else {
        this.messages = [];
        Object.keys(snapshot.val()).map((objectKey, index) => {
          this.messages.push(snapshot.val()[objectKey]);
        });
        const scrollToBottom = setInterval(() => {
          $('#chatroom-container').animate({
            scrollTop: $('#msgs-container').height()
          }, 'slow');
          if (this.messages[this.messages.length - 1]['who'] === 'onflo' && !this.initMsgsLoad) {
            new Audio('../../assets/bell.mp3').play();
          }
          if (this.initMsgsLoad) {
            new Audio('../../assets/bell.mp3').play();
            this.initMsgsLoad = false;
          }
          if (this.pageIsActive) {
            firebase.database().ref('unread/' + userUID).set(unreadByWhom);
          }
          clearInterval(scrollToBottom);
        }, 500);
      }
    });
  }

  ngOnDestroy() {
    this.pageIsActive = false;
  }

}
