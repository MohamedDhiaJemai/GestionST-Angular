import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisonSportiveComponent } from './saison-sportive.component';

describe('SaisonSportiveComponent', () => {
  let component: SaisonSportiveComponent;
  let fixture: ComponentFixture<SaisonSportiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaisonSportiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisonSportiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
