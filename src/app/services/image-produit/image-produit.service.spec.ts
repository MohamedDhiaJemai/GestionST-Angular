import { TestBed } from '@angular/core/testing';

import { ImageProduitService } from './image-produit.service';

describe('ImageProduitService', () => {
  let service: ImageProduitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageProduitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
