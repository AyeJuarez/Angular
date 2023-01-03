import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { MisDatosService } from 'src/app/servicios/mis-datos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fecha',
  templateUrl: './fecha.component.html',
  styleUrls: ['./fecha.component.css']
})
export class FechaComponent implements OnInit, OnDestroy{

public fechaObservable: Observable<Date>
private subscripcion: Subscription;

constructor(
  public servicio: MisDatosService
){}

ngOnDestroy(): void{
  this.subscripcion.unsubscribe();
}

ngOnInit(): void {
  this.servicio.getAlumnos().subscribe(valores => {console.log(valores)});

  this.fechaObservable = this.servicio.getFecha();

  this.servicio.usuarios$.subscribe(console.log);
}

}
