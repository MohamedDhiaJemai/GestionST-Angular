import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriquePresenceComponent } from './historique-presence.component';

describe('HistoriquePresenceComponent', () => {
  let component: HistoriquePresenceComponent;
  let fixture: ComponentFixture<HistoriquePresenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriquePresenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriquePresenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
