import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSTComponent } from './service-st.component';

describe('ServiceSTComponent', () => {
  let component: ServiceSTComponent;
  let fixture: ComponentFixture<ServiceSTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceSTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceSTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
