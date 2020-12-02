import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceStComplementaireComponent } from './service-st-complementaire.component';

describe('ServiceStComplementaireComponent', () => {
  let component: ServiceStComplementaireComponent;
  let fixture: ComponentFixture<ServiceStComplementaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceStComplementaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceStComplementaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
