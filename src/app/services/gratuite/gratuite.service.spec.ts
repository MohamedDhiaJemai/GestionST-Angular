import { TestBed } from '@angular/core/testing';

import { GratuiteService } from './gratuite.service';

describe('GratuiteService', () => {
  let service: GratuiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GratuiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
