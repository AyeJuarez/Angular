import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, map, Observable, of, Subject } from 'rxjs';
import { Alumno } from '../pages/students-page/students';

@Injectable({
  providedIn: 'root'
})
export class MisDatosService {
 
  public usuarios$: Observable<any[]>;
  private usuarios: Subject<any[]>;

  constructor(
    private httpClient: HttpClient
  ) { 
    this.usuarios = new Subject();
    this.usuarios$ = this.usuarios.asObservable();
    this.getUsers().subscribe( response => 
      {
        this.usuarios.next(response.data);
      })
  }

  public getAlumnos(): Observable<Alumno[]>{
    return of([
      {nombre:'Sofia', calificacion:80}
    ]);
  }

  public getFecha(): Observable<Date>{
    return interval(1000).pipe(map(_ => new Date()));
  }

  public getUsers(): Observable<any>{
    return this.httpClient.get(
      'https://regres.in/api/users?page=2'
    );
  }

}
