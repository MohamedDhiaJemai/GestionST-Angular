import { Component, Input, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentsJoueurService } from 'app/services/documents-joueur/documents-joueur.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-document',
  templateUrl: './list-document.component.html',
  styleUrls: ['./list-document.component.css']
})
export class ListDocumentComponent implements OnChanges {
  @Input() someInput: string;

  fileInfos: Observable<any>;
  id: number;
  modalRef: BsModalRef;
  modalRefAnnul: BsModalRef;

  content = '';

  constructor(private docuementsJoueurService: DocumentsJoueurService,
    private router: ActivatedRoute,
    private routerNav: Router, private modalService: BsModalService) { }

  ngOnChanges() {
    this.id = this.router.snapshot.params['id'];
    this.fileInfos = this.docuementsJoueurService.getFiles(this.id);
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
        console.log('res', res)
        const fileURL = URL.createObjectURL(res);
        console.log(fileURL)
        window.open(fileURL, '_blank');

      },
      (content: string) => {
        this.content = content
      }
    );

  }

}
