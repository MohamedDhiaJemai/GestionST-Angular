import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-image-joueur',
  templateUrl: './image-joueur.component.html',
  styleUrls: ['./image-joueur.component.css']
})
export class ImageJoueurComponent implements OnChanges {

  id: number;
  fileInfos: Observable<any>;
  
  constructor(private docuementsJoueurService: DocumentsJoueurService,
    private router: ActivatedRoute,
    private routerNav: Router, private modalService: BsModalService) { }

  ngOnChanges() {
    this.id = this.router.snapshot.params['id'];
    this.fileInfos = this.docuementsJoueurService.getFiles(this.id);
  }

}
