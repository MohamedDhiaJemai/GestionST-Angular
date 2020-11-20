import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
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

  imageToShow: any;
  isImageLoading: boolean;

  urlPhoto = 'http://192.168.0.143:8443/photo/get/';

  constructor(private photoService: PhotoService,
    private router: ActivatedRoute,
    private sanitizer: DomSanitizer) { }

  // createImageFromBlob(image: Blob) {
  //   let reader = new FileReader();
  //   reader.addEventListener("load", () => {
  //     this.imageToShow = reader.result;
  //   }, false);

  //   if (image) {
  //     reader.readAsDataURL(image);
  //   }
  // }

  // getImageFromService() {
  //   this.isImageLoading = true;
  //   this.photoService.getImage(this.id).subscribe(data => {
  //     this.createImageFromBlob(data);
  //     this.isImageLoading = false;
  //   }, error => {
  //     this.isImageLoading = false;
  //     console.log(error);
  //   });
  // }

  //   getImgContent(): SafeUrl {
  //     return this.sanitizer.bypassSecurityTrustUrl(this.imageToShow);
  // }

  ngOnChanges() {
    this.id = this.router.snapshot.params['id'];
    this.urlPhoto = this.urlPhoto + this.id;
    // this.getImageFromService();
    // this.getImgContent();
  }

  onBasicUpload($event) {
      let formData = new FormData();
      formData.append("file", event.files);
      this.photoService.upload(formData, this.id).subscribe(
        resp => {
        },
        err => {
          console.log(err.error)
          this.showViaServiceEror(err.error.message);
          this.clicked = true;
          this.uploadedFiles.pop()
          this.uploadedFilesMessage.pop();
        },
      );
  
    console.log('my file ', this.myfile)
    this.myfile = [];

  }

}
