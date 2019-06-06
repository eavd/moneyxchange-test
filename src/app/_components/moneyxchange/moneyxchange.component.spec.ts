import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { MoneyXchangeComponent } from './moneyxchange.component';
import { ExchangeRateService } from 'src/app/_services';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { MoneyXchangeService } from './moneyxchange.service';

describe('MoneyXchangeComponent', () => {
  let component: MoneyXchangeComponent;
  let exchangeRateService: ExchangeRateService;
  let fixture: ComponentFixture<MoneyXchangeComponent>;

  class FakeExchangeRateService {
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [MoneyXchangeComponent],
      providers: [
        { provide: ExchangeRateService, useClass: FakeExchangeRateService },
        { provide: MoneyXchangeService, useClass: MoneyXchangeService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(inject([ExchangeRateService], s => {
    exchangeRateService = s;
    fixture = TestBed.createComponent(MoneyXchangeComponent);
    component = fixture.componentInstance;
    exchangeRateService.exchangeRateValues = new Subject<any>();
    component.exchangeRateService.exchangeRateValueObservable$ = exchangeRateService.exchangeRateValues.asObservable();
    exchangeRateService.exchangeRateValues.next(1.122);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('value should be equal', () => {
    
    // Arrange
    component.base = '€50.25';
    component.exchangeRate = 1.122;
    const baseToCalc = component.base.replace(/[€/,]/g, '');
    const resultOperation = (+baseToCalc * component.exchangeRate).toString();
    const splitedResult = resultOperation.split('.');
    const result = '$' + splitedResult[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '.' + splitedResult[1];

    // Act
    component.onCalculate();

    // Assert
    expect(component.exchange).toEqual(result);
  });

});
