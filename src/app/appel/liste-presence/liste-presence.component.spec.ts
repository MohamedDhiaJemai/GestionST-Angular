import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePresenceComponent } from './liste-presence.component';

describe('ListePresenceComponent', () => {
  let component: ListePresenceComponent;
  let fixture: ComponentFixture<ListePresenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListePresenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePresenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
