import { TestBed } from '@angular/core/testing';

import { TravelrequetsService } from './travelrequests.service';

describe('DepartmentService', () => {
  let service: TravelrequetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelrequetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
