import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataviewArticleComponent } from './dataview-article.component';

describe('DataviewArticleComponent', () => {
  let component: DataviewArticleComponent;
  let fixture: ComponentFixture<DataviewArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataviewArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataviewArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
