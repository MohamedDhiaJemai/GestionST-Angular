import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-joueur',
  templateUrl: './image-joueur.component.html',
  styleUrls: ['./image-joueur.component.css']
})
export class ImageJoueurComponent implements OnChanges {

  constructor() { }

  ngOnChanges() {
    this.id = this.router.snapshot.params['id'];
    this.fileInfos = this.docuementsJoueurService.getFiles(this.id);

}
