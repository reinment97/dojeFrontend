import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpService } from './shared/http.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentRegisterComponent } from './student-register/student-register.component';

@NgModule( {
    declarations: [
        AppComponent,
        StudentComponent,
        StudentListComponent,
        StudentRegisterComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot( routes ),
        CommonModule,
        FormsModule
    ],
    providers: [HttpService],
    bootstrap: [AppComponent]
} )
export class AppModule { }
