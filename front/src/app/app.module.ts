import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BoardModule } from './board/board.module';
import {HttpService} from './core/http/http.service';
import {FormsModule} from "@angular/forms";
import {UserModule} from "./user/user.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    HttpModule,
    RouterModule.forRoot( routes ),
    BoardModule,
    UserModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
