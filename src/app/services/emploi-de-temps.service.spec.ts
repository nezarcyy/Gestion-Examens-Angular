import { TestBed } from '@angular/core/testing';

import { EmploiDeTempsService } from './emploi-de-temps.service';

describe('EmploiDeTempsService', () => {
  let service: EmploiDeTempsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmploiDeTempsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
