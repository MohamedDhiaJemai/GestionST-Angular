import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Achats } from 'app/model/Achats.model';
import { Transaction } from 'app/model/Transaction.model';
import { TransactionService } from 'app/services/transaction/transaction.service';
import * as jsPDF from 'jspdf';


@Component({
  selector: 'app-consulter-achat',
  templateUrl: './consulter-achat.component.html',
  styleUrls: ['./consulter-achat.component.css']
})
export class ConsulterAchatComponent implements OnInit {
  name = 'jsPDF Example';


  achat: Achats;
  transaction: Transaction;


  constructor(private transactionService: TransactionService, private router: ActivatedRoute) { }

  ngOnInit() {
    const id = this.router.snapshot.params['id'];
    this.transactionService.findById(id).subscribe(
      (data: Transaction) => {
        this.transaction = data;
        console.log('transaction', data)
        this.achat = data.achats;
        console.log('achat', this.achat)
      }
    );
  }

  htmlToPdf() {
    const doc = new jsPDF('letter')
    const ta = document.getElementById('pdfSink');
    doc.fromHTML(ta, 0, 0);
    doc.save('demo.pdf')
  }

}
