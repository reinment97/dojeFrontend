import { Component, OnInit } from '@angular/core';
import { Board } from '../board.model';
import { HttpService } from '../../core/http/http.service';
import {Router} from "@angular/router";



@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {
  BoardList: Board[];

  ngOnInit() {
    this.showBoardList();
  }

  constructor(private router: Router,
              private httpService: HttpService) { }



  showBoardList() {
    this.httpService.sendGet( '/board' ).subscribe(
      (boardList: Array<Board>) => { this.BoardList = boardList; }
    );
  }

  goView(id: number) {
    this.router.navigate(['view', id]);
  }
}
