import { TestBed } from '@angular/core/testing';

import { RetourCashService } from './retour-cash.service';

describe('RetourCashService', () => {
  let service: RetourCashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetourCashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
