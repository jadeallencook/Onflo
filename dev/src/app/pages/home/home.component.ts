import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from '../../services/firebase-auth/firebase-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private FirebaseAuthService: FirebaseAuthService) { }

  ngOnInit() {
  }

}
