import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  public listaAlumnos = ['Jose','Ana','Juan','Pedro','Victoria','Julieta','Adrian'];
  public listaFiltrada = [''];

  constructor(){

  }

  ngOnInit(): void {
    
  }

  
  startWithA = () =>{
    this.listaFiltrada = this.listaAlumnos.filter(element => element.startsWith("A",0,))
  }
  startWithJ = () =>{
    this.listaFiltrada = this.listaAlumnos.filter(element => element.startsWith("J",0,))
  }
  resetFilter = () =>{
    this.listaFiltrada = ['']
  }
  

}
