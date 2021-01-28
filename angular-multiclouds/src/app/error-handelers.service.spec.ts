import { TestBed } from '@angular/core/testing';

import { ErrorHandelersService } from './error-handelers.service';

describe('ErrorHandelersService', () => {
  let service: ErrorHandelersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorHandelersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
