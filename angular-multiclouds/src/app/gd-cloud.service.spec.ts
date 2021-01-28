import { TestBed } from '@angular/core/testing';

import { GdCloudService } from './gd-cloud.service';

describe('GdCloudService', () => {
  let service: GdCloudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GdCloudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
