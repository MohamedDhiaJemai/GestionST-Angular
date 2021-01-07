import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterInscriptionComponent } from './consulter-inscription.component';

describe('ConsulterInscriptionComponent', () => {
  let component: ConsulterInscriptionComponent;
  let fixture: ComponentFixture<ConsulterInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterInscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
