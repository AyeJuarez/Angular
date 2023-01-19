import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComissionPageComponent } from './comission-page.component';

describe('ComissionPageComponent', () => {
  let component: ComissionPageComponent;
  let fixture: ComponentFixture<ComissionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComissionPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComissionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
