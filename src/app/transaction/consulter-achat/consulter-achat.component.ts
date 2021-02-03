import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Achats } from 'app/model/Achats.model';
import { Transaction } from 'app/model/Transaction.model';
import { TransactionService } from 'app/services/transaction/transaction.service';
import * as jsPDF from 'jspdf';
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


  achat: Achats;
  transaction: Transaction;


  constructor(private transactionService: TransactionService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.routeConfig.path)
    const id = this.router.snapshot.params['id'];
    this.transactionService.findById(id).subscribe(
      (data: Transaction) => {
        this.transaction = data;
        this.achat = data.achats;
      }
    );
  }

  print(elementid: string) {

    const printContents = document.getElementById(elementid).innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    location.reload();
    // document.body.innerHTML = originalContents;
  }

  downloadAsPDF(elementid: string) {
    console.log('downloadAsPDF')

    const node = document.getElementById(elementid);
    let img: HTMLImageElement;
    let filename: string;
    let newImage: string;
    domtoimage.toPng(node, { bgcolor: '#fff' }).then(function (dataUrl: string) {
      img = new Image();
      img.src = dataUrl;
      newImage = img.src;
      img.onload = function () {
        const pdfWidth = img.width;
        const pdfHeight = img.height;
        // FileSaver.saveAs(dataUrl, 'my-pdfimage.png'); // Save as Image
        let doc: jsPDF;
        if (pdfWidth > pdfHeight) {
          doc = new jsPDF('l', 'px', [pdfWidth, pdfHeight]);
        } else {
          doc = new jsPDF('p', 'px', [pdfWidth, pdfHeight]);
        }
        const width = doc.internal.pageSize.getWidth();
        const height = doc.internal.pageSize.getHeight();
        doc.addImage(newImage, 'PNG', 10, 10, width, height);
        filename = 'mypdf_' + '.pdf';
        doc.save(filename);
      };
    })
      .catch(function (error: any) {
        console.log(error)
      });
  }

}
