
import { OnDestroy,Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { Student } from 'src/app/models/student.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { updateAuthenticatedUser } from 'src/app/store/auth/auth.actions';
import { authenticatedUserSelector } from 'src/app/store/auth/auth.selectors';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnDestroy {
  form = new FormGroup({
    first_name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    last_name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  })
  user: Student | null = null;
  private destroyed$ = new Subject();
  constructor(private readonly store: Store<AppState>) {
    this.store.select(authenticatedUserSelector)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((user) => {
        if (user) {
          this.user = user;
          this.form.patchValue({
            first_name: user.first_name,
            last_name: user.last_name,
          })
        }
      })
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true)
  }

  onSubmit() {
    if (this.user) {
      this.store.dispatch(updateAuthenticatedUser({
        first_name: this.form.get('first_name')?.value || '',
        last_name: this.form.get('last_name')?.value || '',
      }))
    }
  }
}
