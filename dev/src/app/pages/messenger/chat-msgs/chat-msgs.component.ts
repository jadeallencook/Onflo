import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import * as $ from 'jquery';

interface ChatMsg {
  what: string;
  when: string;
  who: string;
}

@Component({
  selector: 'app-chat-msgs',
  templateUrl: './chat-msgs.component.html',
  styleUrls: ['./chat-msgs.component.css']
})

export class ChatMsgsComponent implements OnInit {

  msgs: Array<ChatMsg> = [];
  userUID: string = '';
  formInView: boolean = false;

  constructor(private route: ActivatedRoute) { }

  formatDate(date) {
    // get date & time from string
    date = new Date(date);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const strTime = hours + ':' + minutes + ' ' + ampm;
    return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear() + ' ' + strTime;
  }

  formatMsg(msg) {
    // add anchors to links
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return msg.replace(urlRegex, function (url) {
      return '<a target="_blank" href="' + url + '">' + url + '</a>';
    });
  }

  ngOnInit() {
    // form view for read reciept
    this.formInView = true;
    // switch for admin user uid retrieval
    if (this.route.snapshot.params['userUID'] && firebase.auth().currentUser.email === 'hello@onflo.io') {
      this.userUID = this.route.snapshot.params['userUID'];
    } else {
      this.userUID = firebase.auth().currentUser.uid;
    }
    // get msgs from firebase
    firebase.database().ref('messages/' + this.userUID).on('value', (snapshot) => {
      // show user has read msg
      if (firebase.auth().currentUser.email === 'hello@onflo.io' && this.formInView) {
        firebase.database().ref('unread/' + this.userUID + '/onflo').set(false);
      } else if (this.formInView) {
        firebase.database().ref('unread/' + this.userUID + '/user').set(false);
      }
      // first time to messenger
      if (!snapshot.val()) {
        // add init msg
        const now = new Date().toString();
        firebase.database().ref('messages/' + firebase.auth().currentUser.uid).push({
          who: 'onflo',
          what: 'Welcome to Onflo messenger! If you need help navigating your dashboard or need advice for an upcoming project, you can message us here and we\'ll get back with you ASAP.',
          when: now
        });
      } else {
        // get all msgs
        this.msgs = [];
        Object.keys(snapshot.val()).map((objectKey, index) => {
          this.msgs.push(snapshot.val()[objectKey]);
        });
        // scroll to bottom and play sound
        const scrollToBottom = setInterval(() => {
          $('#chatroom-container').animate({
            scrollTop: $('#msgs-container').height()
          }, 'slow');
          if (this.msgs[this.msgs.length - 1]['who'] === 'onflo') {
            new Audio('../../assets/bell.mp3').play();
          }
          clearInterval(scrollToBottom);
        }, 500);
      }
    });
  }

  ngOnDestroy() {
    this.formInView = false;
  }

}
