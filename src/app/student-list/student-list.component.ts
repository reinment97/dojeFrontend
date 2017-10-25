import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component( {
    selector: 'app-student-list',
    templateUrl: './student-list.component.html',
    styleUrls: ['./student-list.component.css']
} )
export class StudentListComponent implements OnInit {
    title = 'Student List Board';
    studentList: any;

    ngOnInit(): void {
        // throw new Error('Method not implemented.');
        this.showStudentList();
    }

    constructor( private httpService: HttpService,
        private route: ActivatedRoute,
        private router: Router ) {

    }

    showStudentList() {
        this.httpService.sendGet( '/api/studentList.json' ).subscribe( res => { this.studentList = res; } );
    }

    sendStudentInfo( id ) {
        // this.httpService.sendGet( '/api/studentInfo.json?id=' + id ).subscribe( res => { this.studentInfo = res; } );
        this.router.navigate( ['/student', {
            studentId: id
        }] );
    }
}
