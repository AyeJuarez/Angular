import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MyMaterialModule } from '../shared/modules/my-material.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { HeaderComponent } from './layout/header/header.component';
import { PageWrapperComponent } from './layout/page-wrapper/page-wrapper.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavMenuComponent } from './layout/nav-menu/nav-menu.component';

@NgModule({
  declarations: [
    DashboardComponent,
    MyProfileComponent,
    PageWrapperComponent,
    HeaderComponent,
    NavMenuComponent,
  ],
  imports: [
    CommonModule,
    MyMaterialModule,
    ReactiveFormsModule,
    MatSidenavModule,
    DashboardRoutingModule,
    MatToolbarModule
  ]
})
export class DashboardModule { }