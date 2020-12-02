import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBorneComponent } from './add-borne.component';

describe('AddBorneComponent', () => {
  let component: AddBorneComponent;
  let fixture: ComponentFixture<AddBorneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBorneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBorneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
