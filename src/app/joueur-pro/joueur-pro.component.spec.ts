import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoueurProComponent } from './joueur-pro.component';

describe('JoueurProComponent', () => {
  let component: JoueurProComponent;
  let fixture: ComponentFixture<JoueurProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoueurProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoueurProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
