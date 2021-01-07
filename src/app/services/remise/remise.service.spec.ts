import { TestBed } from '@angular/core/testing';

import { RemiseService } from './remise.service';

describe('RemiseService', () => {
  let service: RemiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
