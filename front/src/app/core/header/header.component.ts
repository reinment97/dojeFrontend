import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  User_Active: boolean;
  constructor(private router: Router) {
    console.log(sessionStorage.getItem('loginData'));
    if ( sessionStorage.getItem('loginData') !== null) {
      this.User_Active = true;
    } else {
      this.User_Active = false;
    }
  }

  ngOnInit() {
  }

  goWrite() {
    this.router.navigate(['write']);
  }

  goHome() {
    this.router.navigate(['']);
  }

  goJoin() {
    this.router.navigate(['join']);
  }

  goLogin() {
    this.router.navigate(['login']);
  }

  goLogout() {
    sessionStorage.removeItem('loginData');
    location.href = '/';
  }
}
