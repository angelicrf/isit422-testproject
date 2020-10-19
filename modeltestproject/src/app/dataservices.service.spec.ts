import { TestBed } from '@angular/core/testing';

import { DataservicesService } from './dataservices.service';

describe('DataservicesService', () => {
  let service: DataservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
