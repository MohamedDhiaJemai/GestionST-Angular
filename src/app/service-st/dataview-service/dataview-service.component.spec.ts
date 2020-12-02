import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataviewServiceComponent } from './dataview-service.component';

describe('DataviewServiceComponent', () => {
  let component: DataviewServiceComponent;
  let fixture: ComponentFixture<DataviewServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataviewServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataviewServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
