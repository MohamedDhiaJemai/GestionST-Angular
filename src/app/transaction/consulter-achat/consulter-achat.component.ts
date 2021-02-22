import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Achat } from 'app/model/Achat.model';
import { Transaction } from 'app/model/Transaction.model';
import { TransactionService } from 'app/services/transaction/transaction.service';
// import * as jsPDF from 'jspdf';
// import * as html2pdf from 'html2pdf.js';
// import * as html2canvas from 'html2canvas';
import domtoimage from 'dom-to-image';
// import * as FileSaver from 'file-saver';


@Component({
  selector: 'app-consulter-achat',
  templateUrl: './consulter-achat.component.html',
  styleUrls: ['./consulter-achat.component.css']
})
export class ConsulterAchatComponent implements OnInit {

  @ViewChild('content') content: ElementRef;


  achats: Achat[];
  transaction: Transaction;


  constructor(private transactionService: TransactionService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.router.snapshot.params['id'];
    this.transactionService.findById(id).subscribe(
      (data: Transaction) => {
        this.transaction = data;
        this.achats = data.achats;
      }
    );
  }

  print(elementid: string) {
    const printContents = document.getElementById(elementid).innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    location.reload();
  }
}
