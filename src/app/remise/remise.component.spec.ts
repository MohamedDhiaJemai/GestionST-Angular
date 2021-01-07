import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemiseComponent } from './remise.component';

describe('RemiseComponent', () => {
  let component: RemiseComponent;
  let fixture: ComponentFixture<RemiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
