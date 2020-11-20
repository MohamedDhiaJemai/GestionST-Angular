import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-document',
  templateUrl: './list-document.component.html',
  styleUrls: ['./list-document.component.css']
})
export class ListDocumentComponent implements OnInit {

  fileInfos: Observable<any>;
  
  constructor() { }

  ngOnInit(){

    this.id = this.router.snapshot.params['id'];

    this.fileInfos = this.docuementsJoueurService.getFiles(this.id);
  }

}
