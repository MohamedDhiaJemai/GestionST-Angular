import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GratuiteComponent } from './gratuite.component';

describe('GratuiteComponent', () => {
  let component: GratuiteComponent;
  let fixture: ComponentFixture<GratuiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GratuiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GratuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
