import { TestBed } from '@angular/core/testing';

import { CarsDetailsService } from './cars-details.service';

describe('CarsDetailsService', () => {
  let service: CarsDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarsDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
