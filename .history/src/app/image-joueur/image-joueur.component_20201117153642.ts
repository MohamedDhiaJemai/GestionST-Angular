import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from 'app/services/photo/photo.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-image-joueur',
  templateUrl: './image-joueur.component.html',
  styleUrls: ['./image-joueur.component.css']
})
export class ImageJoueurComponent implements OnChanges {
  @Input() someInput: string;

  id: number;
  photoSubscription: Subscription;
  photo: File;

  imageToShow: any;

  constructor(private photoService: PhotoService,
    private router: ActivatedRoute) { }

  ngOnChanges() {
    this.id = this.router.snapshot.params['id'];
    this.photoSubscription = this.photoService.getPhoto(this.id).subscribe(
      data => {
        console.log('photo', data)
        this.photo = data;
        console.log('photo', this.photo)
      }
    );
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener('load', () => {
       this.imageToShow = reader.result;
    }, false);
 
    if (image) {
       reader.readAsDataURL(image);
    }
 }

}
