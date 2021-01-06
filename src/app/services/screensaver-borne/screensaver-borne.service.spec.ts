import { TestBed } from '@angular/core/testing';

import { ScreensaverBorneService } from './screensaver-borne.service';

describe('ScreensaverBorneService', () => {
  let service: ScreensaverBorneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreensaverBorneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
