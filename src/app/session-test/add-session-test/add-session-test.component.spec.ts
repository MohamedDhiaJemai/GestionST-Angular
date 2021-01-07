import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSessionTestComponent } from './add-session-test.component';

describe('AddSessionTestComponent', () => {
  let component: AddSessionTestComponent;
  let fixture: ComponentFixture<AddSessionTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSessionTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSessionTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
