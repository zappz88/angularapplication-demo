import { TestBed } from '@angular/core/testing';

import { ApplicationStateService } from './applicationstate-service.service';

describe('ApplicationStateService', () => {
  let service: ApplicationStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
