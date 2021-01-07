import { TestBed } from '@angular/core/testing';

import { SessionTestService } from './session-test.service';

describe('SessionTestService', () => {
  let service: SessionTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
