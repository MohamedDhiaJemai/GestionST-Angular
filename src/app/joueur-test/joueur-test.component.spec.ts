import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoueurTestComponent } from './joueur-test.component';

describe('JoueurTestComponent', () => {
  let component: JoueurTestComponent;
  let fixture: ComponentFixture<JoueurTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoueurTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoueurTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
