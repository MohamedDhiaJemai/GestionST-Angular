import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivraisonsEnAttenteComponent } from './livraisons-en-attente.component';

describe('LivraisonsEnAttenteComponent', () => {
  let component: LivraisonsEnAttenteComponent;
  let fixture: ComponentFixture<LivraisonsEnAttenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivraisonsEnAttenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivraisonsEnAttenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
