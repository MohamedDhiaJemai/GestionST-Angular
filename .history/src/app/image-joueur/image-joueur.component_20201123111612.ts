import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from 'app/services/photo/photo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-image-joueur',
  templateUrl: './image-joueur.component.html',
  styleUrls: ['./image-joueur.component.css']
})
export class ImageJoueurComponent implements OnChanges, OnDestroy {
  @Input() someInputImage: number;

  id: number;
  // urlPhoto: Observable<any>;
  urlPhoto: string;
  alt: string;


  constructor(private router: ActivatedRoute, private photoService: PhotoService) { }

  ngOnChanges() {
    // this.id = this.router.snapshot.params['id'];
    if (this.someInputImage > 0) {
      console.log('okkk')
      this.urlPhoto = 'http://192.168.0.143:8443/photo/get/' + this.someInputImage;
    }
    else {
      console.log('li bih el feyda ', this.someInputImage)
      this.id = this.router.snapshot.params['id'];
      console.log(this.id)
      this.urlPhoto = 'http://192.168.0.143:8443/photo/get/' + this.id;
    }
    // this.urlPhoto = 'http://192.168.0.143:8443/photo/get/' + this.someInputImage;
    // console.log(this.someInputImage)
    // this.alt = this.someInputImage;

  }
  // ngOnInit() {
  //   this.id = this.router.snapshot.params['id'];
  //   this.urlPhoto = 'http://192.168.0.143:8443/photo/get/' + this.id;
  // }

  ngOnDestroy() {

    this.someInputImage = 0;

  }

}
