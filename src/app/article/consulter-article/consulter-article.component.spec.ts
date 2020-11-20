import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterArticleComponent } from './consulter-article.component';

describe('ConsulterArticleComponent', () => {
  let component: ConsulterArticleComponent;
  let fixture: ComponentFixture<ConsulterArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
