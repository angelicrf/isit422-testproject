import { TestBed } from '@angular/core/testing';

import { FinalprojectService } from './finalproject.service';

describe('FinalprojectService', () => {
  let service: FinalprojectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinalprojectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
