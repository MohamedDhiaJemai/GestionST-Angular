import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSessionTestComponent } from './update-session-test.component';

describe('UpdateSessionTestComponent', () => {
  let component: UpdateSessionTestComponent;
  let fixture: ComponentFixture<UpdateSessionTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSessionTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSessionTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
