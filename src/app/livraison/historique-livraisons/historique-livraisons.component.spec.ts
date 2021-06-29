import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueLivraisonsComponent } from './historique-livraisons.component';

describe('HistoriqueLivraisonsComponent', () => {
  let component: HistoriqueLivraisonsComponent;
  let fixture: ComponentFixture<HistoriqueLivraisonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriqueLivraisonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueLivraisonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
