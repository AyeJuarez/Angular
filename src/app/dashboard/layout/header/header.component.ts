import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/login/services/authentication.service';
import { Student } from 'src/app/models/student.model';
import { AppState } from 'src/app/store/app.reducer';
import { authenticatedUserSelector } from 'src/app/store/auth/auth.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {
  @Output() toggleSidebar = new EventEmitter()
  public user: Observable<Student | null>;
  constructor(public readonly AuthService: AuthService, private readonly store: Store<AppState>) {
    this.user = this.store.select(authenticatedUserSelector)
  }
  ngOnDestroy(): void {}
}
