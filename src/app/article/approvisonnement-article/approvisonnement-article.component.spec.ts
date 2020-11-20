import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovisonnementArticleComponent } from './approvisonnement-article.component';

describe('ApprovisonnementArticleComponent', () => {
  let component: ApprovisonnementArticleComponent;
  let fixture: ComponentFixture<ApprovisonnementArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovisonnementArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovisonnementArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
