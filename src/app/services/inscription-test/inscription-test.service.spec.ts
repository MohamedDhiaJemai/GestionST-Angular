import { TestBed } from '@angular/core/testing';

import { InscriptionTestService } from './inscription-test.service';

describe('InscriptionTestService', () => {
  let service: InscriptionTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InscriptionTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
