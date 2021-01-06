import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Achats } from 'app/model/Achats.model';
import { Transaction } from 'app/model/Transaction.model';
import { TransactionService } from 'app/services/transaction/transaction.service';
// import * as jsPDF from 'jspdf';
// import * as html2pdf from 'html2pdf.js';

import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

@Component({
  selector: 'app-consulter-achat',
  templateUrl: './consulter-achat.component.html',
  styleUrls: ['./consulter-achat.component.css']
})
export class ConsulterAchatComponent implements OnInit {

  @ViewChild('content') content: ElementRef;


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

  captureScreen() {
    const pdf = new jsPDF('p', 'mm');
    const promises = $('.pdf-intro').map(function(index, element) {
        return new Promise(function(resolve, reject) {
            html2canvas(element, { allowTaint: true, logging: true })
                .then(function(canvas) {
                    resolve(canvas.toDataURL('image/jpeg', 1.0));
                })
                .catch(function(error) {
                    reject('error in PDF page: ' + index);
                });
        });
    });

    Promise.all(promises).then(function(dataURLS) {
        console.log(dataURLS);
        for (const ind in dataURLS) {
            if (dataURLS.hasOwnProperty(ind)) {
                console.log(ind);
                pdf.addImage(
                    dataURLS[ind],
                    'JPEG',
                    0,
                    0,
                    pdf.internal.pageSize.getWidth(),
                    pdf.internal.pageSize.getHeight(),
                );
                pdf.addPage();
            }
        }
        pdf.save('HTML-Document.pdf');
    });
}

  downloadAsPDF() {
    // const doc = new jsPDF();
    // const specialElementHandlers = {
    //   '#editor': function (element, renderer) {
    //     return true;
    //   }
    // };
    // const content = this.content.nativeElement;
    // doc.fromHTML(content.innerHTML, 15, 15, {
    //   'width': 190,
    //   'elementHandlers': specialElementHandlers
    // });

    // doc.save('test.pdf');

  }

}
