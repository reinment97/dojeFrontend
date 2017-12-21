import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import {User} from "../user.model";
import {HttpService} from "../../core/http/http.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  constructor(private httpService: HttpService, private _location: Location) {
    this.user = new User();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.httpService.sendGet( '/user?useremail=' + this.user.useremail + '&userpassword=' + this.user.userpassword )
      .subscribe( res => {
        console.log(res);
        sessionStorage.setItem('loginData', JSON.stringify(res));
        location.href = '/';
      }, error => {
        // alert( error.message );
        alert( '알수 없는 오류가 발생하였습니다.' );
        this._location.back();
      } );
  }
}
