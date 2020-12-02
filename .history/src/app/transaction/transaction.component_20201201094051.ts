import { Component, OnInit } from '@angular/core';
import { Transaction } from 'app/model/Transaction.model';
import { TransactionService } from 'app/services/transaction/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transactions: Transaction[];

  constructor(private transactionService: TransactionService) { }

  ngOnInit(){
    this.transactionService.getAllTrascation().subscribe(
      data =>{
        this.transactions = data;
      }
    );
  }

}
