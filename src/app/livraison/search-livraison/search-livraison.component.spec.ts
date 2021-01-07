import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLivraisonComponent } from './search-livraison.component';

describe('SearchLivraisonComponent', () => {
  let component: SearchLivraisonComponent;
  let fixture: ComponentFixture<SearchLivraisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchLivraisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
