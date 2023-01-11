import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
 {path:"alumnos", component:AlumnosComponent},
 {path:"about", component:AboutUsComponent},
 {path:"contact", component:ContactComponent},
 {path:"", redirectTo: '/app', pathMatch: 'full'},
 {path:"login",  loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
 data: {
   nombre: 'Login'
 }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
