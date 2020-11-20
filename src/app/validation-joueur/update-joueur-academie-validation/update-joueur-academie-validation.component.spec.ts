import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateJoueurAcademieValidationComponent } from './update-joueur-academie-validation.component';

describe('UpdateJoueurAcademieComponent', () => {
  let component: UpdateJoueurAcademieValidationComponent;
  let fixture: ComponentFixture<UpdateJoueurAcademieValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateJoueurAcademieValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateJoueurAcademieValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
