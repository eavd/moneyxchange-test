import { Component, OnInit } from '@angular/core';
import { ExchangeRateService } from './_services';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private exchangeRateService: ExchangeRateService) { }

  ngOnInit() {
    this.exchangeRateService.fecthRate();
    interval(10000 * 60).subscribe(() => {
      this.exchangeRateService.fecthRate();
    });
  }

}
