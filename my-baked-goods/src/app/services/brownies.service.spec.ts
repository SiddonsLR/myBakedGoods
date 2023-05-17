import { TestBed } from '@angular/core/testing';

import { BrowniesService } from './brownies.service';

describe('BrowniesService', () => {
  let service: BrowniesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrowniesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
