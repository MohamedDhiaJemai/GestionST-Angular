import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTailleComponent } from './ajouter-taille.component';

describe('AjouterTailleComponent', () => {
  let component: AjouterTailleComponent;
  let fixture: ComponentFixture<AjouterTailleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterTailleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterTailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
