import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Achats } from 'app/model/Achats.model';
import { Transaction } from 'app/model/Transaction.model';
import { TransactionService } from 'app/services/transaction/transaction.service';
import * as jsPDF from 'jspdf';
import * as html2pdf from 'html2pdf.js';
import * as html2canvas from 'html2canvas';
import domtoimage from 'dom-to-image';
import * as FileSaver from 'file-saver';
import * as  htmltopdfng6;


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

   downloadAsPDF() {
    console.log('downloadAsPDF')

    const node = document.getElementById('parentdiv');

    let img;
    let filename;
    let newImage;


    domtoimage.toPng(node, { bgcolor: '#fff' })

      .then(function (dataUrl) {

        img = new Image();
        img.src = dataUrl;
        newImage = img.src;

        img.onload = function () {

          let pdfWidth = img.width;
          let pdfHeight = img.height;

          // FileSaver.saveAs(dataUrl, 'my-pdfimage.png'); // Save as Image

          let doc;

          if (pdfWidth > pdfHeight) {
            doc = new jsPDF('l', 'px', [pdfWidth, pdfHeight]);
          } else {
            doc = new jsPDF('p', 'px', [pdfWidth, pdfHeight]);
          }


          let width = doc.internal.pageSize.getWidth();
          let height = doc.internal.pageSize.getHeight();


          doc.addImage(newImage, 'PNG', 10, 10, width, height);
          filename = 'mypdf_' + '.pdf';
          doc.save(filename);

        };


      })
      .catch(function (error) {
        console.log(error)
      });

  }

}
