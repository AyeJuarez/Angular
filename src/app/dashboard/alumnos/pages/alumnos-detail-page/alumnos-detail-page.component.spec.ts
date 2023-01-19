import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosDetailPageComponent } from './alumnos-detail-page.component';

describe('AlumnosDetailPageComponent', () => {
  let component: AlumnosDetailPageComponent;
  let fixture: ComponentFixture<AlumnosDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnosDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnosDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
