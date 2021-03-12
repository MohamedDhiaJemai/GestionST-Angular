import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateJoueurTestComponent } from './update-joueur-test.component';

describe('UpdateJoueurTestComponent', () => {
  let component: UpdateJoueurTestComponent;
  let fixture: ComponentFixture<UpdateJoueurTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateJoueurTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateJoueurTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
