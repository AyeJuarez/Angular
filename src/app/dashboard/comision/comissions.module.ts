import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComissionPageComponent } from './comission-page/comission-page.component';
import { CommissionsRoutingModule } from './comissions-routing.module';



@NgModule({
  declarations: [
    ComissionPageComponent
  ],
  imports: [
    CommonModule,
    CommissionsRoutingModule,
  ]
})
export class CommissionsModule { }