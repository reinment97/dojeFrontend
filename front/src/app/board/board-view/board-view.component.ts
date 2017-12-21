import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {HttpService} from '../../core/http/http.service';
import {Board} from '../board.model';
import {Comment} from '../comment.model';

@Component({
  selector: 'app-board-view',
  templateUrl: './board-view.component.html',
  styleUrls: ['./board-view.component.css']
})
export class BoardViewComponent implements OnInit {
  post_id: String;
  BoardData: Board;
  CommentList: Comment[];
  comment: Comment;
  constructor(private router: Router,
              private httpService: HttpService,
              private route: ActivatedRoute,
              private _location: Location) {

  }

  ngOnInit() {
    this.route.params.subscribe( params => this.post_id = params.id );
    this.showBoardData();
    this.showBoardCommentData();
  }

  showBoardData() {
    this.httpService.sendGet('/board/' + this.post_id).subscribe(
      (boardData: Board) => {
        console.log(boardData);
        this.BoardData = boardData[0];
      }
    );
  }

  showBoardCommentData() {
    this.httpService.sendGet('/comment/' + this.post_id).subscribe(
      (commentList: Array<Comment>) => {
        console.log(commentList);
        this.CommentList = commentList;
      }
    );
  }


  onDelete() {
    this.httpService.sendDelete('/comment/' + this.post_id)
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
