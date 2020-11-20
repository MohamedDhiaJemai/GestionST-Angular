import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentsJoueurService } from 'app/services/documents-joueur/documents-joueur.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-document',
  templateUrl: './list-document.component.html',
  styleUrls: ['./list-document.component.css']
})
export class ListDocumentComponent implements OnInit, OnChanges {
  @Input() someInput: string;

  fileInfos: Observable<any>;
  id: number;

  constructor(private docuementsJoueurService: DocumentsJoueurService,
    private router: ActivatedRoute,
    private routerNav: Router) { }

  ngOnInit() {

    this.id = this.router.snapshot.params['id'];

    this.fileInfos = this.docuementsJoueurService.getFiles(this.id);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.fileInfos = this.docuementsJoueurService.getFiles(this.id);
  }
}
