import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExchangeRateService } from '../../_services';
import { MoneyXchangeService } from './moneyxchange.service';

@Component({
  selector: 'app-moneyxchange',
  templateUrl: './moneyxchange.component.html',
  styleUrls: ['./moneyxchange.component.scss']
})
export class MoneyXchangeComponent implements OnInit {

  public subscription: Subscription;
  exchangeRate = 0;
  base: string;
  exchange: string;

  constructor(
    public exchangeRateService: ExchangeRateService,
    private moneyXchangeService: MoneyXchangeService) { }

  ngOnInit() {
    this.subscription = this.exchangeRateService.exchangeRateValueObservable$.subscribe((values: number) => {
      this.exchangeRate = values['USD'];
    });
  }

  onCalculate() {
    this.exchange = this.moneyXchangeService.calcExchangeValue(this.base, this.exchangeRate);
  }

  formatCurrency() {
    this.base = this.moneyXchangeService.formatEurCurrency(this.base);
  }

}
