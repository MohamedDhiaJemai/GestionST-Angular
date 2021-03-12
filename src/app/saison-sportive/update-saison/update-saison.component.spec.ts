import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSaisonComponent } from './update-saison.component';

describe('UpdateSaisonComponent', () => {
  let component: UpdateSaisonComponent;
  let fixture: ComponentFixture<UpdateSaisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSaisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
