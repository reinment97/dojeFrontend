import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardListComponent } from './board-list/board-list.component';
import { BoardWriteComponent } from './board-write/board-write.component';
import { BoardViewComponent } from './board-view/board-view.component';
import {FormsModule} from "@angular/forms";
import { BoardModifyComponent } from './board-modify/board-modify.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    BoardListComponent,
    BoardWriteComponent,
    BoardViewComponent,
    BoardModifyComponent
  ],
  declarations: [
    BoardListComponent,
    BoardWriteComponent,
    BoardViewComponent,
    BoardModifyComponent
  ]
})
export class BoardModule { }
