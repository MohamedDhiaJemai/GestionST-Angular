import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Achats } from 'app/model/Achats.model';
import { Transaction } from 'app/model/Transaction.model';
import { TransactionService } from 'app/services/transaction/transaction.service';
import * as jsPDF from 'jspdf';
import * as html2pdf from 'html2pdf.js';
import * as html2canvas from 'html2canvas';
import domtoimage from 'dom-to-image';

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

  // public captureScreen() {
  //   var data = document.getElementById('contentToConvert');
  //   html2canvas(data).then(canvas => {
  //     var imgWidth = 208;
  //     var pageHeight = 295;
  //     var imgHeight = canvas.height * imgWidth / canvas.width;
  //     var heightLeft = imgHeight;

  //     const contentDataURL = canvas.toDataURL('image/png')
  //     let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
  //     var position = 0;
  //     pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
  //     pdf.save('MYPdf.pdf'); // Generated PDF   
  //   });


  //   new JsPDF(
  //     Orientation, // Landscape or Portrait  

  //     unit, // mm, cm, in  

  //     format // A2, A4 etc  
  //   );
  // }


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
    console.log('downloadAsPDF')

    let node = document.getElementById('parentdiv');

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
          }
          else {
            doc = new jsPDF('p', 'px', [pdfWidth, pdfHeight]);
          }


          var width = doc.internal.pageSize.getWidth();
          var height = doc.internal.pageSize.getHeight();


          doc.addImage(newImage, 'PNG', 10, 10, width, height);
          filename = 'mypdf_' + '.pdf';
          doc.save(filename);

        };


      })
      .catch(function (error) {

        // Error Handling

      });

  }

}
