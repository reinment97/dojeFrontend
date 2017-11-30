import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Student } from '../model/student.model';
@Component( {
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.css']
} )

export class StudentComponent implements OnInit {
    id: any;
    studentInfo: Student;

    constructor( private route: ActivatedRoute,
        private httpService: HttpService ) {
        this.id = this.route.snapshot.params['studentId'];
    }

    ngOnInit() {
        this.getStudentInfo();
    }

    getStudentInfo() {
        this.httpService.sendGet( '/api/studentInfo.json?id=' + this.id ).
            subscribe((studentInfo: Student) => { this.studentInfo = studentInfo; });
    }
}
