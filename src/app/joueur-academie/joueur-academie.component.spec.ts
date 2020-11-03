import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoueurAcademieComponent } from './joueur-academie.component';

describe('JoueurAcademieComponent', () => {
  let component: JoueurAcademieComponent;
  let fixture: ComponentFixture<JoueurAcademieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoueurAcademieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoueurAcademieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
