import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentsJoueurService } from 'app/services/documents-joueur/documents-joueur.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnChanges {

  @Input() someInput: string;
  id: number;

  modalRef: BsModalRef;
  modalRefAnnul: BsModalRef;


  constructor(private documentsJoueurService: DocumentsJoueurService, private router: ActivatedRoute) { }




  ngOnChanges(changes: SimpleChanges) {
    this.id = this.router.snapshot.params['id'];
  }

  deleteFile(name: string) {
    console.log(name)
    console.log(this.id)
    this.documentsJoueurService.deleteFile(this.id, name).subscribe(
      resp => {
        console.log('name:' + name)
      }
    );

    this.modalRef.hide();
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
