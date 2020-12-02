import { TestBed } from '@angular/core/testing';

import { ServiceSTService } from './service-st.service';

describe('ServiceSTService', () => {
  let service: ServiceSTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceSTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
