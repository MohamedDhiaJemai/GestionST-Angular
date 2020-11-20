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


  constructor(private docuementsJoueurService: DocumentsJoueurService,
    private router: ActivatedRoute,
    private routerNav: Router, private modalService: BsModalService) { }

  ngOnChanges(changes: SimpleChanges) {
    this.id = this.router.snapshot.params['id'];
    this.fileInfos = this.docuementsJoueurService.getFiles(this.id);
  }

  deleteFile(templateAnnulation: TemplateRef<any>, name: string) {
    console.log(name)
    console.log(this.id)
    this.docuementsJoueurService.deleteFile(this.id, name).subscribe(
      resp => {
        console.log('name:' + name)
      },
      err => {
        if (err.status === 500) {
          this.modalRef.hide();
          this.modalRefAnnul = this.modalService.show(templateAnnulation);
          console.log('STATUS 500');
          // this.routerNav.navigateByUrl('/role/details/' + id);
        });

      this.modalRef.hide();
  }

  public openModal (template: TemplateRef <any>) {
    this.modalRef = this.modalService.show(template);
  }

}
