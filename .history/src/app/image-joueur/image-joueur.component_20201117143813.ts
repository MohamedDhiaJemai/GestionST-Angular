import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from 'app/services/photo/photo.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-image-joueur',
  templateUrl: './image-joueur.component.html',
  styleUrls: ['./image-joueur.component.css']
})
export class ImageJoueurComponent implements OnChanges {

  id: number;
  fileInfos: Observable<any>;

  constructor(private photoService: PhotoService,
    private router: ActivatedRoute,
    private routerNav: Router, private modalService: BsModalService) { }

  ngOnChanges() {
    this.id = this.router.snapshot.params['id'];
    this.fileInfos = this.docuementsJoueurService.getFiles(this.id);
  }

}
