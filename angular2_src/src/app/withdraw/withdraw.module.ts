import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';

import { WithdrawComponent } from './withdraw.component';
import { WithdrawRoutingModule } from './withdraw-routing.module';

import { TransactionService } from '../transaction/transaction.service';

@NgModule({
  imports: [
    CommonModule,
  	HttpModule,
    WithdrawRoutingModule
  ],
  declarations: [ WithdrawComponent ],
  providers: [
      TransactionService
  ],
})
export class WithdrawModule { }
