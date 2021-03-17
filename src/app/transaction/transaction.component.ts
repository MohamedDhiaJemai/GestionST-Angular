import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TypeClient } from 'app/model/Enums.model';
import { Transaction } from 'app/model/Transaction.model';
import { TransactionSearch } from 'app/model/TransactionSearch.model';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';
import { BorneService } from 'app/services/borne/borne.service';
import { TransactionService } from 'app/services/transaction/transaction.service';
import { SelectItem } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transactions: Transaction[];
  selectedTransaction: Transaction;
  searchParams: TransactionSearch = new TransactionSearch();
  displayEncaissement: boolean;
  displayAchats: boolean;
  edition: boolean;
  consultation: boolean;
  @ViewChild('dt') table: Table;

  dd: Date;
  df: Date;
  bornes: SelectItem[];
  typesClient: SelectItem[];

  constructor(private transactionService: TransactionService, private autorisationService: AutorisationService,
    private borneService: BorneService, private datePipe: DatePipe) {
    this.typesClient = Object.keys(TypeClient).map(key => ({ label: TypeClient[key], value: key }));

  }
  ngOnInit() {
    const obj = this.autorisationService.checkAutorisations1('transactions');
    this.edition = obj.edition;
    this.consultation = obj.consultation;
    this.transactionService.getToday().subscribe(data => this.transactions = data);
    this.borneService.getAllBorne().subscribe(data => this.bornes = data);
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

  reset() {
    this.transactionService.getToday().subscribe(data => this.transactions = data);
    this.searchParams = new TransactionSearch();
    this.dd = undefined;
    this.df = undefined;
  }

  findTransactions() {
    if (this.dd && this.df && this.dd <= this.df) {
      this.searchParams.dateTransactionDebut = this.datePipe.transform(this.dd, 'yyyy-MM-ddTHH:mm:ss.001');
      this.searchParams.dateTransactionFin = this.datePipe.transform(this.df, 'yyyy-MM-ddT23:59:59.999');
    }
    if (this.searchParams && Object.keys(this.searchParams).length > 0) {
      this.transactionService.find(this.searchParams).subscribe(data => this.transactions = data);
      console.log(this.searchParams);
    } else {
      console.log('empty');
    }
  }
}
