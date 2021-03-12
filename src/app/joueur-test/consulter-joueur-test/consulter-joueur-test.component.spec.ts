import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterJoueurTestComponent } from './consulter-joueur-test.component';

describe('ConsulterJoueurTestComponent', () => {
  let component: ConsulterJoueurTestComponent;
  let fixture: ComponentFixture<ConsulterJoueurTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterJoueurTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterJoueurTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
