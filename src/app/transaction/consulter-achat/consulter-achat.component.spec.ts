import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterAchatComponent } from './consulter-achat.component';

describe('ConsulterAchatComponent', () => {
  let component: ConsulterAchatComponent;
  let fixture: ComponentFixture<ConsulterAchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterAchatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
