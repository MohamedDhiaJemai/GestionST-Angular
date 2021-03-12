import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataviewJTestComponent } from './dataview-j-test.component';

describe('DataviewJTestComponent', () => {
  let component: DataviewJTestComponent;
  let fixture: ComponentFixture<DataviewJTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataviewJTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataviewJTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
