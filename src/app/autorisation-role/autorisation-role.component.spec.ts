import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorisationRoleComponent } from './autorisation-role.component';

describe('AutorisationRoleComponent', () => {
  let component: AutorisationRoleComponent;
  let fixture: ComponentFixture<AutorisationRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutorisationRoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorisationRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
