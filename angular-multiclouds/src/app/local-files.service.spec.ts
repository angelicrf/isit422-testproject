import { TestBed } from '@angular/core/testing';

import { LocalFilesService } from './local-files.service';

describe('LocalFilesService', () => {
  let service: LocalFilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalFilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
