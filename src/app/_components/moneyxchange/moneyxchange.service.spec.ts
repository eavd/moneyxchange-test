import { TestBed } from '@angular/core/testing';

import { MoneyXchangeService } from './moneyxchange.service';

describe('MoneyXchangeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoneyXchangeService = TestBed.get(MoneyXchangeService);
    expect(service).toBeTruthy();
  });
});
