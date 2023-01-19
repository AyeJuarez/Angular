import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosPageComponent } from './pages/alumnos-page/alumnos-page.component';
import { StudentDetailPageComponent } from './pages/alumnos-detail-page/alumnos-detail-page.component';

// localhost:4200/students...
const routes: Routes = [
  {
    path: '',
    component: AlumnosPageComponent
  },
  {
    path: ':studentId',
    component: StudentDetailPageComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class StudentsRoutingModule { }