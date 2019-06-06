import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoneyXchangeService {

  calcExchangeValue(base: string, exchangeRate: number): string {
    const baseToCalc = base.replace(/[€/,]/g, '');
    const resultOperation = (+baseToCalc * exchangeRate).toString();
    const splitedResult = resultOperation.split('.');
    return this.formatUsdCurrency(splitedResult[0]) + '.' + splitedResult[1];
  }

  formatEurCurrency(str: string) {
    if (/[.]/.test(str)) {
      const numberOfDecimals = str.split('.').pop().length;
      if (numberOfDecimals > 4) {
        return str.slice(0, -1);
      }
      else {
        return str;
      }
    } else {
      return str !== '' && str !== '€' ? '€' + str.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '';
    }
  }

  formatUsdCurrency(str: string): string {
    return '$' + str.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
