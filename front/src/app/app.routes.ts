import { Routes } from '@angular/router';
import { BoardListComponent } from './board/board-list/board-list.component';
import {BoardWriteComponent} from './board/board-write/board-write.component';
import {BoardViewComponent} from './board/board-view/board-view.component';
import {BoardModifyComponent} from "./board/board-modify/board-modify.component";
import {LoginComponent} from "./user/login/login.component";
import {JoinComponent} from "./user/join/join.component";



export const routes: Routes = [
  { path: 'join', component: JoinComponent},
  { path: 'login', component: LoginComponent},
  { path: 'modify/:id', component: BoardModifyComponent},
  { path: 'write', component: BoardWriteComponent},
  { path: 'view/:id', component: BoardViewComponent},
  { path: '**', component: BoardListComponent}
];
