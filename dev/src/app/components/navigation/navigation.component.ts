import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from '../../services/firebase-auth/firebase-auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private FirebaseAuthService: FirebaseAuthService) { }

  ngOnInit() {
  }

}
