import { TestBed } from '@angular/core/testing';

import { OdCloudService } from './od-cloud.service';

describe('OdCloudService', () => {
  let service: OdCloudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OdCloudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
