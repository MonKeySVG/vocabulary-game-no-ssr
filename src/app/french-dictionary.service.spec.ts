import { TestBed } from '@angular/core/testing';

import { FrenchDictionaryService } from './french-dictionary.service';

describe('FrenchDictionaryService', () => {
  let service: FrenchDictionaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrenchDictionaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
