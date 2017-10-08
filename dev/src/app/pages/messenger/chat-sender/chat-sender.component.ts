import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import * as $ from 'jquery';
import { Message } from '../../../interfaces/message';

@Component({
  selector: 'app-chat-sender',
  templateUrl: './chat-sender.component.html',
  styleUrls: ['./chat-sender.component.css']
})
export class ChatSenderComponent implements OnInit {

  message: Message = {
    who: '',
    what: '',
    when: ''
  };

  sendMsg(key) {
    // check for enter btn or method call
    if (!key || key.keyCode === 13) {
      // cache build info
      this.message.when = new Date().toString();
      let uid: string;
      // switch for admin repling (if admin is signed in)
      if (this.route.snapshot.params['userUID'] && firebase.auth().currentUser.email === 'hello@onflo.io') {
        uid = this.route.snapshot.params['userUID'];
        this.message.who = 'onflo';
        firebase.database().ref('unread/' + uid + '/user').set(true);
      } else {
        uid = firebase.auth().currentUser.uid;
        this.message.who = 'you';
        firebase.database().ref('unread/' + uid + '/onflo').set(true);
      }
      // push msg to firebase
      firebase.database().ref('messages/' + uid).push(this.message);
      // scroll to bottom
      $('#chatroom-container').animate({
        scrollTop: $('#msgs-container').height()
      }, 'slow');
      // reset msg txt
      this.message.what = '';
    }
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit() { }

}
