import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationJoueurComponent } from './validation-joueur.component';

describe('ValidationJoueurComponent', () => {
  let component: ValidationJoueurComponent;
  let fixture: ComponentFixture<ValidationJoueurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationJoueurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationJoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
