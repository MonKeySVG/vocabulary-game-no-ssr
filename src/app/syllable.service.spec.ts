import { TestBed } from '@angular/core/testing';

import { SyllableService } from './syllable.service';

describe('SyllableService', () => {
  let service: SyllableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SyllableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
