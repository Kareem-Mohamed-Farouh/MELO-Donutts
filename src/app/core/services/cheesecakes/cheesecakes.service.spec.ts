import { TestBed } from '@angular/core/testing';

import { CheesecakesService } from './cheesecakes.service';

describe('CheesecakesService', () => {
  let service: CheesecakesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheesecakesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
