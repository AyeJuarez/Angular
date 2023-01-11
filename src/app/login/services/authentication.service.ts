import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of as ObservableOf } from 'rxjs';

import { ElementoMenu } from 'src/app/core/modelos/elemento-menu';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  

  public getMenuElements(): Observable<ElementoMenu[]> {
    // FIXME: Este método debe pedir al back los menús que tiene permitido ver
    return ObservableOf([
      {nombre: 'Alumnos', enlace: 'alumnos', icono: 'alumnos'}
    ]);
  }
  

}
