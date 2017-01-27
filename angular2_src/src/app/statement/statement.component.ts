import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Transaction } from '../transaction/transaction';
import { TransactionService } from '../transaction/transaction.service';

@Component({
  templateUrl: 'statement.component.html'
})
export class StatementComponent implements OnInit {

  constructor( private transactionService: TransactionService ) { }

  showTransactions: boolean;
  transactions: Array<Object>;

  ngOnInit(): void {
  		this.showTransactions = false;
  		this.transactionService.getStatement()
         .subscribe(
           obj => { console.log(obj); this.showTransactions = true; this.transactions = obj; },
           error =>  {});
  }

}
