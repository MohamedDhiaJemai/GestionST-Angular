import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionTestComponent } from './inscription-test.component';

describe('InscriptionTestComponent', () => {
  let component: InscriptionTestComponent;
  let fixture: ComponentFixture<InscriptionTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
