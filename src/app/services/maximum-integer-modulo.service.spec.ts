import { TestBed } from '@angular/core/testing';

import { MaximumIntegerModuloService } from './maximum-integer-modulo.service';

describe('MaximumIntegerModuloService', () => {
  let service: MaximumIntegerModuloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaximumIntegerModuloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
