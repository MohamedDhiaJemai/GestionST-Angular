import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJoueurProComponent } from './add-joueur-pro.component';

describe('AddJoueurProComponent', () => {
  let component: AddJoueurProComponent;
  let fixture: ComponentFixture<AddJoueurProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJoueurProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJoueurProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
