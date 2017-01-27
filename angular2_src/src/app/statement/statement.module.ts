import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';

import { StatementComponent } from './statement.component';
import { StatementRoutingModule } from './statement-routing.module';

import { TransactionService } from '../transaction/transaction.service';

@NgModule({
  imports: [
  	CommonModule,
  	HttpModule,
    StatementRoutingModule
  ],
  declarations: [ StatementComponent ],
  providers: [
      TransactionService
  ]
})
export class StatementModule { }
