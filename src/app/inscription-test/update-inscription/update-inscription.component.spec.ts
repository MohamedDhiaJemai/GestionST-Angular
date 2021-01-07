import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInscriptionComponent } from './update-inscription.component';

describe('UpdateInscriptionComponent', () => {
  let component: UpdateInscriptionComponent;
  let fixture: ComponentFixture<UpdateInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateInscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
