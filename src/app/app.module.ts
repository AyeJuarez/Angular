import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorHelperComponent } from './shared/error-helper/error-helper.component';
import { PageWrapperComponent } from './shared/layout/page-wrapper/page-wrapper.component';
import { MyMaterialModule } from './shared/modules/my-material.module';
import { StudentDialogComponent } from './shared/components/student-dialog/student-dialog.component';
import { PagesModule } from './pages/pages.module';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { ObservablesComponent } from './shared/components/observables/observables.component';
import { FechaComponent } from './shared/components/fecha/fecha.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactComponent,
    ErrorHelperComponent,
    PageWrapperComponent,
    StudentDialogComponent,
    StudentsPageComponent,
    ObservablesComponent,
    FechaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MyMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
