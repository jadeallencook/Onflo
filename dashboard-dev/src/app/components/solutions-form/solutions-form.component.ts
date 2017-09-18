import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from '../../services/firebase-auth/firebase-auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-solutions-form',
  templateUrl: './solutions-form.component.html',
  styleUrls: ['./solutions-form.component.css']
})
export class SolutionsFormComponent implements OnInit {

  issue:string = '';
  submitted:boolean = false;

  constructor(private FirebaseAuthService: FirebaseAuthService) { }

  ngOnInit() {
  }

  reset() {
    this.submitted = false;
    this.issue = '';
  }

  submitIssue() {
    let uid = this.FirebaseAuthService.ActiveUser.uid;
    let date = new Date().toString();
    if (this.issue.length > 1) {
      firebase.database().ref('deals').push({
        userUID: uid,
        issue: this.issue,
        submitted: date,
        status: 'submitted'
      });
      this.submitted = true;
    }
  }

}
