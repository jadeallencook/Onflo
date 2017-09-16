import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrum',
  templateUrl: './breadcrum.component.html',
  styleUrls: ['./breadcrum.component.css']
})
export class BreadcrumComponent implements OnInit {

  currentPage:string = 'home';

  constructor(private router:Router) {
    router.events.subscribe((url:any) => {
      this.currentPage = url.url.substr(1);
      if (url.url.length === 1) this.currentPage = 'home';
    });
  }

  ngOnInit() {
  }

}
