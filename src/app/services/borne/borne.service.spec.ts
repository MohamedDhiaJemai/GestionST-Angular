import { TestBed } from '@angular/core/testing';

import { BorneService } from './borne.service';

describe('BorneService', () => {
  let service: BorneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BorneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
