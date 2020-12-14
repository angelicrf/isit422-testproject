import { TestBed } from '@angular/core/testing';

import { DpCloudService } from './dp-cloud.service';

describe('DpCloudService', () => {
  let service: DpCloudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DpCloudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
