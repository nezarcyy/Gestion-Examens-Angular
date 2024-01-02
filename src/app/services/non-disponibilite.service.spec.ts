import { TestBed } from '@angular/core/testing';

import { NonDisponibiliteService } from './non-disponibilite.service';

describe('NonDisponibiliteService', () => {
  let service: NonDisponibiliteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NonDisponibiliteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
