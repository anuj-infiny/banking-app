import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Transaction } from '../transaction/transaction';
import { TransactionService } from '../transaction/transaction.service';

@Component({
  	templateUrl: 'deposit.component.html'
})
export class DepositComponent implements OnInit {
	showMessage: boolean;
	class_name: string;
	message: string; 
	transaction = new Transaction(0, 1, "");

  	constructor( private transactionService: TransactionService ) { 
  		
  	}

  	deposit(){
  		this.transaction.amount = parseFloat(""+this.transaction.amount);
  		this.transactionService.addTransaction(this.transaction)
         .subscribe(
           trasaction  => {this.showMessage = true; this.class_name = "alert-success"; this.message=trasaction.amount + " was deposited"},
           error =>  {this.showMessage = true; this.class_name = "alert-warning"; this.message=error;});
  	}
  	
  	ngOnInit(): void {
  		this.transaction.amount = 0;
  		this.showMessage = false;
  	}

}
