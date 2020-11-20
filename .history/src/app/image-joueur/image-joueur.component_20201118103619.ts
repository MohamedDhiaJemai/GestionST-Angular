import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from 'app/services/photo/photo.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { MessageService } from 'primeng/api';
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

  image: File;



  constructor(private photoService: PhotoService,
    private router: ActivatedRoute, private messageService: MessageService,
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
  // upload(event) {
  //   this.clicked = false;
  //   for (let file of event.files) {
  //     let formData = new FormData();
  //     formData.append("file", file);
  //     this.photoService.upload(formData, this.id).subscribe(
  //       resp => {
  //         this.clicked = true;
  //         console.log(resp.message)
  //       },
  //       err => {
  //         console.log(err.error.message);
  //         this.clicked = true;
  //       },
  //     );
  //   }

  // }

  upload(event) {
    this.showViaServiceWait();
    for (const file of event.files) {
      const formData = new FormData();
      formData.append('file', file);
      this.photoService.upload(formData, this.id).subscribe(
        resp => {
          this.showViaServiceOk();
          this.urlPhoto  = 0;
          this.ngOnChanges();
        },
        err => {
          this.showViaServiceEror();
          this.urlPhoto  = null;
          this.ngOnChanges();
        },
      );
    }
  }

  showViaServiceWait() {
    this.messageService.clear();
    this.messageService.add({ severity: 'warn', summary: 'Info Message' });
  }
  showViaServiceOk() {
    this.messageService.clear();
    this.messageService.add({ severity: 'success', summary: 'Success' });
  }
  showViaServiceEror() {
    this.messageService.clear();
    this.messageService.add({ severity: 'error', summary: 'Error' });
  }
}
