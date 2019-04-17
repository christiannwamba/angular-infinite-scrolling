import { TestBed } from '@angular/core/testing';

import { FruitsServiceService } from './fruits.service';

describe('FruitsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FruitsServiceService = TestBed.get(FruitsServiceService);
    expect(service).toBeTruthy();
  });
});
