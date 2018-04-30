import { Router } from '@angular/router';
import { Component } from '@angular/core';

const nav = document.querySelector('ion-nav');

@Component({
  selector: 'app-page-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  
  constructor(private router:Router) {
  }

  navigateUser() {
    this.router.navigateByUrl('/sample');
  }

}
