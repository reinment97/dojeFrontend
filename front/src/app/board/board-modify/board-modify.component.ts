import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {Board} from "../board.model";
import {ActivatedRoute} from "@angular/router";
import {HttpService} from "../../core/http/http.service";

@Component({
  selector: 'app-board-modify',
  templateUrl: './board-modify.component.html',
  styleUrls: ['./board-modify.component.css']
})
export class BoardModifyComponent implements OnInit {
  board_id: String;
  boardData: Board;
  constructor(private route: ActivatedRoute , private httpService: HttpService, private _location: Location) {
    this.boardData = new Board();
    this.board_id =  this.route.snapshot.paramMap.get('id');
    this.showBoardData(this.board_id);
  }

  ngOnInit() {
  }

  showBoardData(id) {
    this.httpService.sendGet('/board/' + id).subscribe(
      (boardData: Board) => {
        this.boardData = boardData;
      }
    );
  }

  onSubmit() {
    this.httpService.sendPut( '/board', this.boardData )
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
