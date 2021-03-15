import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueApprovisionnementComponent } from './historique-approvisionnement.component';

describe('HistoriqueApprovisionnementComponent', () => {
  let component: HistoriqueApprovisionnementComponent;
  let fixture: ComponentFixture<HistoriqueApprovisionnementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriqueApprovisionnementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueApprovisionnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
