import { Component, OnDestroy, OnInit } from '@angular/core';
import { StudentsService } from '../../services/alumnos.service';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/core/modelos/respuesta';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-alumnos-detail-page',
  templateUrl: './alumnos-detail-page.component.html',
  styleUrls: ['./alumnos-detail-page.component.css']
})
export class StudentDetailPageComponent implements OnInit, OnDestroy {
  public student: Student | null = null
  private destroyed$ = new Subject()
  constructor(private readonly studentsService: StudentsService, private readonly activatedRoute: ActivatedRoute) {}

  ngOnDestroy(): void {
    this.destroyed$.next(true);
  }
  ngOnInit(): void {
    this.studentsService.getStudentById(parseInt(this.activatedRoute.snapshot.params['studentId'] || 0))
      .pipe(takeUntil(this.destroyed$))
      .subscribe((result) => this.student = result)
  }
}
