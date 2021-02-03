import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  displayEncaissement: boolean;
  displayAchats: boolean;
  edition: boolean;
  consultation: boolean;
  @ViewChild('dt') table: Table;

  constructor(private transactionService: TransactionService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.checkAutorisations();

    console.log(this.activatedRoute.routeConfig.path)
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

  checkAutorisations() {
    const autorisations: Array<any> = JSON.parse(localStorage.getItem('autorisations'));

        const roless: Array<any> = JSON.parse(localStorage.getItem('roles'));
    this.edition = false;
    this.consultation = false;
    if (roless.includes('ADMIN')) {
      this.edition = true;
      this.consultation = true;
    } else {
      autorisations.forEach(element => {
        if (element.metier === 'transactions') {
          if (!element.consultation) {
            this.router.navigateByUrl('/acceuil');
          }
          this.edition = element.edition;
          this.consultation = element.consultation;
        }
      });
    }
  }
}
