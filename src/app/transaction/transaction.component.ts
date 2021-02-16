import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaction } from 'app/model/Transaction.model';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';
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
  displayEncaissement: boolean;
  displayAchats: boolean;
  edition: boolean;
  consultation: boolean;
  @ViewChild('dt') table: Table;

  constructor(private transactionService: TransactionService, private activatedRoute: ActivatedRoute,
    private autorisationService: AutorisationService) { }
  ngOnInit() {
    const obj = this.autorisationService.checkAutorisations1('transactions');
    this.edition = obj.edition;
    this.consultation = obj.consultation;
    this.transactionService.getAllTrascation().subscribe(
      data => {
        this.transactions = data;
      }
    );
  }
  showDialogEncaissement() {
    this.displayEncaissement = true;
  }
  showDialogAchats() {
    this.displayAchats = true;
  }
  clear(table: Table) {
    table.clear();
  }
}
