import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageJoueurComponent } from './image-joueur.component';

describe('ImageJoueurComponent', () => {
  let component: ImageJoueurComponent;
  let fixture: ComponentFixture<ImageJoueurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageJoueurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageJoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
