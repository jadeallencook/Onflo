import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import * as $ from 'jquery';

@Component({
  selector: 'app-chat-sender',
  templateUrl: './chat-sender.component.html',
  styleUrls: ['./chat-sender.component.css']
})
export class ChatSenderComponent implements OnInit {

  msg: string = '';

  sendMsg(key) {
    if (!key || key.keyCode === 13) {
      // cache build info
      const now = new Date().toString();
      let who: string;
      let userUID: string;
      // switch for admin repling
      if (this.route.snapshot.params['userUID'] && firebase.auth().currentUser.email === 'hello@onflo.io') {
        userUID = this.route.snapshot.params['userUID'];
        who = 'onflo';
        firebase.database().ref('unread/' + userUID + '/user').set(true);
      } else {
        userUID = firebase.auth().currentUser.uid;
        who = 'you';
        firebase.database().ref('unread/' + userUID + '/onflo').set(true);
      }
      // push msg to firebase
      firebase.database().ref('messages/' + userUID).push({
        who: who,
        what: this.msg,
        when: now
      });
      // scroll to bottom
      $('#chatroom-container').animate({
        scrollTop: $('#msgs-container').height()
      }, 'slow');
      // reset msg txt
      this.msg = '';
    }
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
