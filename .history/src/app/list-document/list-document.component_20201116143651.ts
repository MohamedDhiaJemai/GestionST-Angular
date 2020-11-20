import { Component, OnInit } from '@angular/core';
import { DocumentsJoueurService } from 'app/services/documents-joueur/documents-joueur.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-document',
  templateUrl: './list-document.component.html',
  styleUrls: ['./list-document.component.css']
})
export class ListDocumentComponent implements OnInit {

  fileInfos: Observable<any>;
  id: number;
  
  constructor(private docuementsJoueurService: DocumentsJoueurService) { }

  ngOnInit(){

    this.id = this.router.snapshot.params['id'];

    this.fileInfos = this.docuementsJoueurService.getFiles(this.id);
  }

}
