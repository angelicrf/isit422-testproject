import { TestBed } from '@angular/core/testing';

import { BxCloudService } from './bx-cloud.service';

describe('BxCloudService', () => {
  let service: BxCloudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BxCloudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
