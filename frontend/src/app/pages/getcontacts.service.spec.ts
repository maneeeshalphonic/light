import { TestBed } from '@angular/core/testing';

import { GetcontactsService } from './getcontacts.service';

describe('GetcontactsService', () => {
  let service: GetcontactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetcontactsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
