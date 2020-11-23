import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from 'app/services/photo/photo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-image-joueur',
  templateUrl: './image-joueur.component.html',
  styleUrls: ['./image-joueur.component.css']
})
export class ImageJoueurComponent implements OnChanges, OnInit {
  @Input() someInputImage: string;

  id: number;
  urlPhoto:  Observable<any>;


  constructor(private router: ActivatedRoute, private photoService:PhotoService) { }

  ngOnChanges() {
    this.id = this.router.snapshot.params['id'];
    this.urlPhoto = this.photoService.getPhoto(this.id);
    // this.urlPhoto = 'http://192.168.0.143:8443/photo/get/' + this.id;
    // console.log(this.someInputImage)
  }
  ngOnInit() {
    this.ngOnChanges();
  }

}
