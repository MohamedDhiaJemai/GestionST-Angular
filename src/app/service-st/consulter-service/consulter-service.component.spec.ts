import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterServiceComponent } from './consulter-service.component';

describe('ConsulterServiceComponent', () => {
  let component: ConsulterServiceComponent;
  let fixture: ComponentFixture<ConsulterServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
