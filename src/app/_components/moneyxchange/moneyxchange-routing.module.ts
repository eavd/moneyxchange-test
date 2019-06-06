import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoneyXchangeComponent } from './moneyxchange.component';

const routes: Routes = [
  { path: '', component: MoneyXchangeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoneyXchangeRoutingModule { }
