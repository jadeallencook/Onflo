import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from './services/firebase-auth/firebase-auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseAuthService]
})
export class AppComponent {

  email:string;
  password: string;

  constructor(public FirebaseAuthService: FirebaseAuthService) { }

  ngOnInit() {
    this.FirebaseAuthService.errorMsg = '';
  }
}
