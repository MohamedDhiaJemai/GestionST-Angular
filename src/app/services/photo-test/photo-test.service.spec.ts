import { TestBed } from '@angular/core/testing';

import { PhotoTestService } from './photo-test.service';

describe('PhotoTestService', () => {
  let service: PhotoTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
