import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateJoueurProComponent } from './update-joueur-pro.component';

describe('UpdateJoueurProComponent', () => {
  let component: UpdateJoueurProComponent;
  let fixture: ComponentFixture<UpdateJoueurProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateJoueurProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateJoueurProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
