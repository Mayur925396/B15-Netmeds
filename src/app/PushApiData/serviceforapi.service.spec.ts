import { TestBed } from '@angular/core/testing';

import { ServiceforapiService } from './serviceforapi.service';

describe('ServiceforapiService', () => {
  let service: ServiceforapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceforapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
