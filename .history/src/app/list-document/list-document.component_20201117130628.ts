import { Component, Input, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentsJoueurService } from 'app/services/documents-joueur/documents-joueur.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { element } from 'protractor';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-document',
  templateUrl: './list-document.component.html',
  styleUrls: ['./list-document.component.scss']
})
export class ListDocumentComponent implements OnChanges {
  @Input() someInput: string;

  fileInfos: Observable<any>;
  id: number;
  modalRef: BsModalRef;
  modalRefAnnul: BsModalRef;

  content = '';
  fileURL: string;

  images: string[] = [];

  activeIndex: number = 0;
  displayCustom: boolean;

  fileContent: any;


  constructor(private docuementsJoueurService: DocumentsJoueurService,
    private router: ActivatedRoute,
    private routerNav: Router, private modalService: BsModalService) { }

  ngOnChanges() {
    this.id = this.router.snapshot.params['id'];
    this.fileInfos = this.docuementsJoueurService.getFiles(this.id);

    // this.docuementsJoueurService.getFiles(this.id).subscribe(
    //   (data: any[]) => {
    //     this.images = data;
    //     // data.forEach(element => {
    //     //   console.log('url ', element.url);
    //     //   this.url = element.url;
    //     //   this.images.push(this.url)
    //     //   console.log(this.images)
    //     // }
    //     // )
    //   }
    // );
  }

  imageClick() {
    console.log("ok")
    fileContent = file.Data;
fileType = file.ContentType;
return File(fileContent, fileType);
    this.displayCustom = true;
  }
  deleteFile(name: string) {
    console.log(name)
    console.log(this.id)
    this.docuementsJoueurService.deleteFile(this.id, name).subscribe(
      resp => {
        console.log('name:' + name)
        this.ngOnChanges();
      }
    );
    this.modalRef.hide();
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  viewFile(name: string) {
    console.log('23')
    this.docuementsJoueurService.viewFile(this.id, name).subscribe(
      res => {
        console.log('111', res)
        this.fileURL = URL.createObjectURL(res.headers.url);
        console.log('fileURL', this.fileURL)
        window.open(this.fileURL, '_blank');

      }
      // ,
      // (content: string) => {
      //   this.content = content
      // }
    );

  }

}
