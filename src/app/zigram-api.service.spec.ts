import { TestBed } from '@angular/core/testing';

import { ZigramApiService } from './zigram-api.service';

describe('ZigramApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZigramApiService = TestBed.get(ZigramApiService);
    expect(service).toBeTruthy();
  });
});
