import { TestBed } from '@angular/core/testing';

import { ObligationService } from './obligation.service';

describe('ObligationService', () => {
  let service: ObligationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObligationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
