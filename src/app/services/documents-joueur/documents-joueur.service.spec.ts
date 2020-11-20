import { TestBed } from '@angular/core/testing';

import { DocumentsJoueurService } from './documents-joueur.service';

describe('DocumentsJoueurService', () => {
  let service: DocumentsJoueurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentsJoueurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
