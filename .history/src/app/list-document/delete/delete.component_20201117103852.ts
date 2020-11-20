import { Component, Input, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentsJoueurService } from 'app/services/documents-joueur/documents-joueur.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnChanges {

  @Input() someInput: string;

  name: string;

  id: number;

  modalRef: BsModalRef;
  modalRefAnnul: BsModalRef;


  constructor(private documentsJoueurService: DocumentsJoueurService, private router: ActivatedRoute,
    private modalService: BsModalService) { }

  ngOnChanges(changes: SimpleChanges) {
    this.id = this.router.snapshot.params['id'];
  }

  deleteFile(someInput: string) {
    console.log(someInput)
    console.log(this.id)
    this.documentsJoueurService.deleteFile(this.id, someInput).subscribe(
      resp => {
        console.log('name:' + someInput)
      }
    );

    this.modalRef.hide();
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
