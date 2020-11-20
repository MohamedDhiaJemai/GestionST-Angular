import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterJoueurProComponent } from './consulter-joueur-pro.component';

describe('ConsulterJoueurProComponent', () => {
  let component: ConsulterJoueurProComponent;
  let fixture: ComponentFixture<ConsulterJoueurProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterJoueurProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterJoueurProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
