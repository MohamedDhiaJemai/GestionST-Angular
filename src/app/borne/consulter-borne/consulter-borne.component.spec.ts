import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterBorneComponent } from './consulter-borne.component';

describe('ConsulterBorneComponent', () => {
  let component: ConsulterBorneComponent;
  let fixture: ComponentFixture<ConsulterBorneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterBorneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterBorneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
