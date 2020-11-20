import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentsJoueurService } from 'app/services/documents-joueur/documents-joueur.service';
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

  constructor(private docuementsJoueurService: DocumentsJoueurService,
    private router: ActivatedRoute,
    private routerNav: Router) { }

  ngOnChanges(changes: SimpleChanges) {
    this.id = this.router.snapshot.params['id'];
    this.fileInfos = this.docuementsJoueurService.getFiles(this.id);
  }

  deleteFile(name: string) {
    console.log(name)
    console.log(this.id)
    this.docuementsJoueurService.deleteFile(this.id, name).subscribe(
      data => {
        console.log(data)
        this.ngOnChanges("dd");
      }
    );
  }


}
