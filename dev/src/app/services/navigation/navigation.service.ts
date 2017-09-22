import { Injectable } from '@angular/core';
import { BreadcrumComponent } from '../../components/breadcrum/breadcrum.component';


@Injectable()
export class NavigationService {

  currentPage:string = 'home';

  constructor() { }
}
