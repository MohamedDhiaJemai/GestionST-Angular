import { TestBed } from '@angular/core/testing';

import { JoueurAcademieService } from './joueur-academie.service';

describe('JoueurAcademieService', () => {
  let service: JoueurAcademieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoueurAcademieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
