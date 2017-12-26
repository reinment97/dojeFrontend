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
  parentComment: String;
  constructor(private router: Router,
              private httpService: HttpService,
              private route: ActivatedRoute,
              private _location: Location) {
    this.comment = new Comment();
  }

  ngOnInit() {
    this.route.params.subscribe( params => this.post_id = params.id );
    this.showBoardData();
    this.showBoardCommentData();

    console.log(this.post_id);
    this.comment.level = 0;
    this.comment.seq = 1;
    this.comment.board_id = Number(this.post_id);
  }

  showBoardData() {
    this.httpService.sendGet('/board/' + this.post_id).subscribe(
      (boardData: Board) => {
        console.log(boardData);
        this.BoardData = boardData;
      }
    );
  }

  showBoardCommentData() {
    this.httpService.sendGet('/comment/' + this.post_id).subscribe(
      (commentList: Array<Comment>) => {
        console.log(commentList);
        this.CommentList = commentList;
        this.comment.gr = this.CommentList[0].gr + 1;
      }
    );
  }


  onDelete() {
    this.httpService.sendDelete('/board/' + this.post_id)
      .subscribe( res => {
        console.log(res);
        this._location.back();
      }, error => {
        // alert( error.message );
        alert( '알수 없는 오류가 발생하였습니다.' );
        this._location.back();
      } );
  }

  onModify(id) {
    this.router.navigate(['/modify/' + id]);
  }

  onCommentChange(level , group , seq , content) {
    this.comment.level = level;
    this.comment.gr = group;
    this.comment.seq = seq;
    this.parentComment = content;

    console.log(this.comment);
  }

  onCommentSubmit() {

    console.log(this.comment);
  }
}
