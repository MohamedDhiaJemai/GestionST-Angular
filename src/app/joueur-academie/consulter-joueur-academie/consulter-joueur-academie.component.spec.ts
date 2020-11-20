import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterJoueurAcademieComponent } from './consulter-joueur-academie.component';

describe('ConsulterJoueurAcademieComponent', () => {
  let component: ConsulterJoueurAcademieComponent;
  let fixture: ComponentFixture<ConsulterJoueurAcademieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterJoueurAcademieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterJoueurAcademieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
