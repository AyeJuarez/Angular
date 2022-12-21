import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student } from 'src/app/models/student.model';
import { StudentDialogComponent } from '../../shared/components/student-dialog/student-dialog.component';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.css']
})
export class StudentsPageComponent {
  students: Student[] = [
    new Student(1, 'Sofia', 'Lemos', true),
    new Student(2, 'Leonardo', 'Rodriguez', false),
    new Student(3, 'Mariano', 'Alves', true),
    new Student(4, 'Juan', 'Juarez', false),
  ]

  displayedColumns = ['id', 'firstName', 'lastName', 'isActive', 'edit', 'delete']

  constructor ( private readonly dialogService: MatDialog){}

  addStudent(){
    const dialog = this.dialogService.open(StudentDialogComponent)

    dialog.afterClosed().subscribe((value) =>
    {
      if (value){
        const lastId = this.students[this.students.length - 1]?.id;
      
        this.students = [...this.students, new Student(lastId + 1, value.firstName, value.lastName, true)];

      }
    })
  }

  removeStudent(student: Student){
    this.students = this.students.filter((stu) => stu.id !== student.id);
  }

  editStudent(student: Student){
    const dialog = this.dialogService.open(StudentDialogComponent, {
      data: student,
    })

    dialog.afterClosed().subscribe((data) => {
      if (data){
        this.students = this.students.map((stu) => stu.id === student.id ? { ...stu, ...data} : stu)
      }
    })

  }

}
