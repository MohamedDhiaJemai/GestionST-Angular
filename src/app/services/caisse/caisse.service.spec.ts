import { TestBed } from '@angular/core/testing';

import { CaisseService } from './caisse.service';

describe('CaisseService', () => {
  let service: CaisseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaisseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
