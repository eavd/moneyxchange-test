import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FixerModel } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {
  exchangeRateValues = new Subject<any>();
  public exchangeRateValueObservable$ = this.exchangeRateValues.asObservable();

  constructor(private http: HttpClient) { }

  fecthRate() {
    const request = this.http.get<FixerModel>(environment.apiRestUrl + 'access_key=' + environment.apiRest_accessKey
      + '&base=' + environment.apiRest_base + '&symbols=' + environment.apiRest_symbols);

    request.subscribe((response: FixerModel) => {
      this.exchangeRateValues.next(response.rates);
    });
  }
}
