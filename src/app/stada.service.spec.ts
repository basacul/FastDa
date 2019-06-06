import { TestBed } from '@angular/core/testing';

import { StadaService } from './stada.service';

describe('StadaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StadaService = TestBed.get(StadaService);
    expect(service).toBeTruthy();
  });
});
