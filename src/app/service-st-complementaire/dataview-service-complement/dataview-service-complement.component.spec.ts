import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataviewServiceComplementComponent } from './dataview-service-complement.component';

describe('DataviewServiceComplementComponent', () => {
  let component: DataviewServiceComplementComponent;
  let fixture: ComponentFixture<DataviewServiceComplementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataviewServiceComplementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataviewServiceComplementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
