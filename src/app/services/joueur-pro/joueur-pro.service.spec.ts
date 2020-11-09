import { TestBed } from '@angular/core/testing';

import { JoueurProService } from './joueur-pro.service';

describe('JoueurProService', () => {
  let service: JoueurProService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoueurProService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
