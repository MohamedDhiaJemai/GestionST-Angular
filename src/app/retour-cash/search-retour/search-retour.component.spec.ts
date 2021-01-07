import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRetourComponent } from './search-retour.component';

describe('SearchRetourComponent', () => {
  let component: SearchRetourComponent;
  let fixture: ComponentFixture<SearchRetourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchRetourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRetourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
