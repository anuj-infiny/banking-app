import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';

import { DepositComponent } from './deposit.component';
import { DepositRoutingModule } from './deposit-routing.module';

import { TransactionService } from '../transaction/transaction.service';

@NgModule({
  imports: [
  	CommonModule,
  	HttpModule,
    DepositRoutingModule
  ],
  declarations: [ DepositComponent ],
  providers: [
      TransactionService
  ],
})
export class DepositModule { }