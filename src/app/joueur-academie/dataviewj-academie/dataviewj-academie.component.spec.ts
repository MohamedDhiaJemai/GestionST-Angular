import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataviewjAcademieComponent } from './dataviewj-academie.component';

describe('DataviewjAcademieComponent', () => {
  let component: DataviewjAcademieComponent;
  let fixture: ComponentFixture<DataviewjAcademieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataviewjAcademieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataviewjAcademieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
