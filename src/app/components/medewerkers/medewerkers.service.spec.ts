import { TestBed } from '@angular/core/testing';

import { MedewerkersService } from './medewerkers.service';

describe('MedewerkersService', () => {
  let service: MedewerkersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedewerkersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
