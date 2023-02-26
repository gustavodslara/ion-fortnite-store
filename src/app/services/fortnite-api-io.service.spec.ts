import { TestBed } from '@angular/core/testing';

import { FortniteApiIoService } from './fortnite-api-io.service';

describe('FortniteApiIoService', () => {
  let service: FortniteApiIoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FortniteApiIoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
