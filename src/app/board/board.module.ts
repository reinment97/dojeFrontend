import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardListComponent } from './board-list/board-list.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    BoardListComponent
  ],
  declarations: [BoardListComponent]
})
export class BoardModule { }
