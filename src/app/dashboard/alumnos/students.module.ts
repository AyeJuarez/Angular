import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosPageComponent } from './pages/alumnos-page/alumnos-page.component';
import { StudentDetailPageComponent } from './pages/alumnos-detail-page/alumnos-detail-page.component';
import { StudentsRoutingModule } from './students-routing.module';
import { MyMaterialModule } from 'src/app/shared/modules/my-material.module';
import { MatTableModule } from '@angular/material/table';
import { AlumnosComponent } from './components/alumnos.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AlumnosPageComponent,
    StudentDetailPageComponent,
    AlumnosComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StudentsRoutingModule,
    MyMaterialModule,
    MatTableModule,
  ]
})
export class StudentsModule { }