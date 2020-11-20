import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateJoueurAcademieValidationComponent } from './update-joueur-academie-validation.component';

describe('UpdateJoueurAcademieComponent', () => {
  let component: UpdateJoueurAcademieComponent;
  let fixture: ComponentFixture<UpdateJoueurAcademieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateJoueurAcademieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateJoueurAcademieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
