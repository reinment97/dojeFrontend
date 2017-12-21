import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {HttpService} from '../../core/http/http.service';
import {Board} from '../board.model';


@Component({
  selector: 'app-board-write',
  templateUrl: './board-write.component.html',
  styleUrls: ['./board-write.component.css']
})
export class BoardWriteComponent implements OnInit {

  board: Board;
  boardData;
  constructor(private _location: Location,
              private httpService: HttpService,

              ) {
    this.board = new Board();
    // user id setting
    this.board.writer = JSON.parse( localStorage.getItem('loginData') ).id;
  }

  ngOnInit() {

  }

  onSubmit() {
    this.boardData = this.board;
    this.httpService.sendPost( '/board', this.boardData )
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
