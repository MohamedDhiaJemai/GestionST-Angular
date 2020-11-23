import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JoueurAcamedie } from 'app/model/JoueurAcamedie.model';
import { JoueurAcademieService } from 'app/services/joueur-academie/joueur-academie.service';
import { PhotoService } from 'app/services/photo/photo.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-image-joueur',
  templateUrl: './image-joueur.component.html',
  styleUrls: ['./image-joueur.component.css']
})
export class ImageJoueurComponent implements OnChanges {

  @Input()
  someInput: string;

  id: number;
  urlPhoto: string;

  
  // myfile: any[] = [];

  // joueurAcademie: JoueurAcamedie = new JoueurAcamedie();

  // image: File;
  // imageToShow: any;
  // isImageLoading: boolean;

  constructor(private photoService: PhotoService,
    private router: ActivatedRoute
    // private sanitizer: DomSanitizer
  ) { }

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
    this.urlPhoto = 'http://192.168.0.143:8443/photo/get/' + this.id;
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

}
