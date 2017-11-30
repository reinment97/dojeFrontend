import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { Location } from '@angular/common';

import { Student } from '../model/student.model';
@Component( {
    selector: 'app-student-register',
    templateUrl: './student-register.component.html',
    styleUrls: ['./student-register.component.css']
} )
export class StudentRegisterComponent implements OnInit {

    studentDto: Student;

    constructor( private httpService: HttpService,
        private _location: Location ) {
        this.studentDto = new Student();
    }

    ngOnInit() {
    }

    public onSubmit( form ) {
        console.log( this.studentDto );

        if ( confirm( '학생 정보를 등록하시겠습니까?' ) ) {
            this.httpService.sendPost( '/api/saveStudentInfo.json', this.studentDto )
                .subscribe( res => {
                    if ( res.code === '00' ) {
                        alert( '학생 정보가 등록되었습니다.' );
                        this._location.back();
                    } else {
                        // alert( error.message );
                        alert( '등록에 실패하였습니다.' );
                        this._location.back();
                    }
                }, error => {
                    // alert( error.message );
                    alert( '알수 없는 오류가 발생하였습니다.' );
                    this._location.back();
                } );
        }
    }

}
