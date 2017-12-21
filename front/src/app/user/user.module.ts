import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { JoinComponent } from './join/join.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LoginComponent,
    JoinComponent
  ],
  declarations: [
    LoginComponent,
    JoinComponent
  ]
})
export class UserModule { }
