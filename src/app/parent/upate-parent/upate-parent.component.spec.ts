import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpateParentComponent } from './upate-parent.component';

describe('UpateParentComponent', () => {
  let component: UpateParentComponent;
  let fixture: ComponentFixture<UpateParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpateParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpateParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
