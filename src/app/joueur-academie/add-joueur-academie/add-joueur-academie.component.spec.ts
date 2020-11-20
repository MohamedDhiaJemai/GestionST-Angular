import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJoueurAcademieComponent } from './add-joueur-academie.component';

describe('AddJoueurAcademieComponent', () => {
  let component: AddJoueurAcademieComponent;
  let fixture: ComponentFixture<AddJoueurAcademieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJoueurAcademieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJoueurAcademieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
