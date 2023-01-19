import { Component, OnDestroy } from '@angular/core';
import { Student } from 'src/app/core/modelos/respuesta';
import { AlumnosComponent } from '../../components/alumnos.component';
import { MatDialog } from '@angular/material/dialog';
import { StudentsService } from '../../services/alumnos.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-alumnos-page',
  templateUrl: './alumnos-page.component.html',
  styleUrls: ['./alumnos-page.component.css']
})
export class AlumnosPageComponent  implements OnDestroy {
  displayedColumns = ['id', 'firstName', 'lastName', 'active', 'delete', 'edit', 'viewDetail'];
  students: Observable<Student[]>;
  private destroyed$ = new Subject()

  constructor(private readonly studentsService: StudentsService, private readonly dialogService: MatDialog) {
    this.students = this.studentsService.students$;
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true)
  }

  editStudent(element: Student) {
    const dialog = this.dialogService.open(AlumnosComponent, {
      data: element
    })
    dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.studentsService.editStudent(element.id, data);
      }
    })
  }

  createStudent() {
    const dialog = this.dialogService.open(AlumnosComponent)
    dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.studentsService.createStudent({ firstName: data.firstName, lastName: data.lastName });
      }
    })
  }

  deleteStudent(element: Student) {
    this.studentsService.removeStudent(element.id);
  }

}
