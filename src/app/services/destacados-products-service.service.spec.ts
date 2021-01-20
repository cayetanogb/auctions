import { TestBed } from '@angular/core/testing';

import { DestacadosProductsServiceService } from './destacados-products-service.service';

describe('DestacadosProductsServiceService', () => {
  let service: DestacadosProductsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DestacadosProductsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
