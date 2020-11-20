import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DocumentsJoueurService } from 'app/services/documents-joueur/documents-joueur.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnChanges {

  @Input() someInput: string;

  constructor(private documentsJoueurService: DocumentsJoueurService) { }

  ngOnChanges(changes: SimpleChanges) {
  
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
