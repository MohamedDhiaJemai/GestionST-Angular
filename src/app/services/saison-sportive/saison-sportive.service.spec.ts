import { TestBed } from '@angular/core/testing';

import { SaisonSportiveService } from './saison-sportive.service';

describe('SaisonSportiveService', () => {
  let service: SaisonSportiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaisonSportiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
