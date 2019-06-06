import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ExchangeRateService } from './exchange-rate-service.service';

describe('ExchangeRateService', () => {
  let service: ExchangeRateService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  beforeEach(() => {
    service = TestBed.get(ExchangeRateService);
    service.exchangeRateValues.next(1.122);
    service.exchangeRateValueObservable$ = service.exchangeRateValues.asObservable();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
