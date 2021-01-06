import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Achats } from 'app/model/Achats.model';
import { Transaction } from 'app/model/Transaction.model';
import { TransactionService } from 'app/services/transaction/transaction.service';
import * as htmlToImage from 'html-to-image';
let jsPDF = require('jspdf');



@Component({
  selector: 'app-consulter-achat',
  templateUrl: './consulter-achat.component.html',
  styleUrls: ['./consulter-achat.component.css']
})
export class ConsulterAchatComponent implements OnInit {

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

  public captureScreen() {
    const filename = 'rtgs-form.pdf';
    const node = document.getElementById('contentToConvert');
    htmlToImage.toPng(node)
    .then( (dataUrl) => {
    const img = new Image();
    img.src = dataUrl;
    const pdf = new jspdf('p', 'mm', 'a4');
    pdf.setLineWidth(1);
    pdf.addImage(img, 'PNG', 0, 0, 208, 298);
    pdf.save(filename);
    })
    .catch((error) => {
    console.error('oops, something went wrong!', error);
    });
    }

}
