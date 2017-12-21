import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {HttpService} from "../../core/http/http.service";
import {User} from "../user.model";

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {
  user: User;
  constructor(private httpService: HttpService, private _location: Location) {
    this.user = new User();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.httpService.sendPost( '/user', this.user )
      .subscribe( res => {
        console.log(res);
        this._location.back();
      }, error => {
        // alert( error.message );
        alert( '알수 없는 오류가 발생하였습니다.' );
        this._location.back();
      } );
  }
}
