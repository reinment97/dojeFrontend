import { Routes } from '@angular/router';

import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentRegisterComponent } from './student-register/student-register.component';

export const routes: Routes = [
    { path: 'student', component: StudentComponent },
    { path: 'studentRegister', component: StudentRegisterComponent },
    { path: '**', component: StudentListComponent }
];
