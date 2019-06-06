import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MoneyXchangeRoutingModule } from './moneyxchange-routing.module';
import { MoneyXchangeComponent } from './moneyxchange.component';

import {
  ButtonModule,
  InputTextModule
} from 'primeng/primeng';

@NgModule({
  declarations: [MoneyXchangeComponent],
  imports: [
    CommonModule,
    FormsModule,
    MoneyXchangeRoutingModule,

    ButtonModule,
    InputTextModule
  ]
})
export class MoneyXchangeModule { }
