import { Component, OnInit, ViewChild } from '@angular/core';
import { Transaction } from 'app/model/Transaction.model';
import { TransactionService } from 'app/services/transaction/transaction.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transactions: Transaction[];
  selectedTransaction: Transaction;
  displayshowDialogEncaissement: boolean;
  displayAchats: boolean;
  @ViewChild('dt') table: Table;

  constructor(private transactionService: TransactionService) {
    this.transactionService.getAllTrascation().subscribe(
      data => {
        this.transactions = data;
        console.log(this.transactions)
      }
    );
  }

  ngOnInit() {

  }

  showDialogEncaissement() {
    this.displayEncaissement = true;
  }

  showDialogAchats() {
    this.displayAchats = true;
}

}
