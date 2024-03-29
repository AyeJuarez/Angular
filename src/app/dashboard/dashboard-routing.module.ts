import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'alumnos',
        loadChildren: () => import('./alumnos/students.module').then((module) => module.StudentsModule)
      },
      {
        path: 'courses',
        loadChildren: () => import('./cursos/courses.module').then((module) => module.CoursesModule)
      },
      {
        path: 'commissions',
        loadChildren: () => import('./comision/comissions.module').then((module) => module.CommissionsModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./products/products.module').then((module) => module.ProductsModule)
      },
      {
        path: 'my-profile',
        component: MyProfileComponent,
      }
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }