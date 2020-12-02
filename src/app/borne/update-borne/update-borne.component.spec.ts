import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBorneComponent } from './update-borne.component';

describe('UpdateBorneComponent', () => {
  let component: UpdateBorneComponent;
  let fixture: ComponentFixture<UpdateBorneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBorneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBorneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
