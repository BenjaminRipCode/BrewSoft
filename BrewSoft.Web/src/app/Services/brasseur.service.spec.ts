import { TestBed } from '@angular/core/testing';

import { BrasseurService } from './brasseur.service';

describe('BrasseurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrasseurService = TestBed.get(BrasseurService);
    expect(service).toBeTruthy();
  });
});
