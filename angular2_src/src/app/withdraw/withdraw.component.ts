import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Transaction } from '../transaction/transaction';
import { TransactionService } from '../transaction/transaction.service';

@Component({
  templateUrl: 'withdraw.component.html'
})

export class WithdrawComponent implements OnInit {

  constructor( private transactionService: TransactionService ) { }

  showMessage: boolean;
  class_name: string;
  message: string; 

  totalAmount: number;
  showAmount: boolean;
  transaction = new Transaction(0, 2, "");

  withdraw_transfer() {
  		if(this.transaction.tranType == 2){
  			this.transaction.to_user = "";
  		}
  		this.transaction.amount = parseFloat(this.transaction.amount + "");
  		this.totalAmount = parseFloat(this.totalAmount + "");

  		if(this.transaction.amount > this.totalAmount){
  			this.showMessage = true; this.class_name = "alert-warning"; this.message="Withdraw amount can't be greater than balance amount";
  			return;
  		} else {
  			this.showMessage = false;
  		}
  		this.transactionService.addTransaction(this.transaction)
         .subscribe(
           trasaction  => {
           			this.transaction.amount = 0;
           			this.getBalance();
           			this.showMessage = true; this.class_name = "alert-success"; this.message=(trasaction.amount * -1) + " was withdrawn"
           },
           error =>  {this.showMessage = true; this.class_name = "alert-warning"; this.message=error;});
  }
  
  getBalance(){
  		this.transactionService.getBalance()
         .subscribe(
           obj  => {this.showAmount = true; this.totalAmount = obj['amount']; },
           error =>  {});
  }

  ngOnInit(): void {
  		this.showMessage = false;
  		this.transaction.amount = 0;
  		this.totalAmount = 0;
  		this.transaction.to_user = "";
  		this.getBalance();
  }

}
