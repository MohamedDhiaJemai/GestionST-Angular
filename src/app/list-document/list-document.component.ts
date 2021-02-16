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
  @Input() noDeletion: boolean;

  fileInfos: Observable<any>;
  id: number;
  modalRef: BsModalRef;
  modalRefAnnul: BsModalRef;

  content = '';
  fileURL: string;

  images: string[] = [];

  displayCustom: boolean;


  constructor(private docuementsJoueurService: DocumentsJoueurService,
    private router: ActivatedRoute,
    private routerNav: Router, private modalService: BsModalService) { }

  ngOnChanges() {
    this.id = this.router.snapshot.params['id'];
    this.fileInfos = this.docuementsJoueurService.getFiles(this.id);
  }

  imageClick(url) {
    let newTab = window.open();
    newTab.document.body.innerHTML = '<img src="' + url + '" >';
    this.displayCustom = true;
  }

  deleteFile(name: string) {
    this.docuementsJoueurService.deleteFile(this.id, name).subscribe(
      resp => {
        this.ngOnChanges();
      }
    );
    this.modalRef.hide();
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
