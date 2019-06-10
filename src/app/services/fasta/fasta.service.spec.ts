import { TestBed } from '@angular/core/testing';

import { FastaService } from './fasta.service';

describe('FastaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FastaService = TestBed.get(FastaService);
    expect(service).toBeTruthy();
  });
});
