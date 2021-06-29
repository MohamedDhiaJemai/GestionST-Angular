import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoLivraisonComponent } from './info-livraison.component';

describe('InfoLivraisonComponent', () => {
  let component: InfoLivraisonComponent;
  let fixture: ComponentFixture<InfoLivraisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoLivraisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
