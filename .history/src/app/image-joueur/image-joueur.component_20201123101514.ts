import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-image-joueur',
  templateUrl: './image-joueur.component.html',
  styleUrls: ['./image-joueur.component.css']
})
export class ImageJoueurComponent implements OnChanges {
  @Input() someInput: string;

  id: number;
  urlPhoto: string;


  constructor(private router: ActivatedRoute) { }

  ngOnChanges() {
    this.id = this.router.snapshot.params['id'];
    this.urlPhoto = 'http://192.168.0.143:8443/photo/get/' + this.id;
    console.log(this.someInput)
  }

}
