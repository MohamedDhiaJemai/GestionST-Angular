import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Borne } from 'app/model/Borne.model';
import { BorneService } from 'app/services/borne/borne.service';
import { ScreensaverBorneService } from 'app/services/screensaver-borne/screensaver-borne.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-borne',
  templateUrl: './borne.component.html',
  styleUrls: ['./borne.component.css'],
  providers: [MessageService]
})
export class BorneComponent implements OnInit {

  bornes: Borne[];
  selectedBorne: Borne;
  borneSubscription: Subscription;
  borne: Borne = new Borne();
  @ViewChild('dt') table: Table;


  modalRef: BsModalRef;
  modalRefAnnul: BsModalRef;

  displayMaximizable: boolean;
  displayBasic: boolean;
  displayBasicRouleur: boolean;
  displayBasicInformation: boolean;
  displayBasicFTP: boolean;

  url;
  format;
  file: File;
  ImgUrl: any;
  uploadForm: FormGroup;

  imageToShow: any;
  isImageLoading: boolean;

  testImage = true;



  urlPhoto = 'http://192.168.0.143:8443/screensaver/get/';

  constructor(private borneService: BorneService, private messageService: MessageService,
    private formBuilder: FormBuilder, private screensaverService: ScreensaverBorneService,
    private modalService: BsModalService, private router: Router, private sanitizer: DomSanitizer) {
    this.file = null;
  }

  ngOnInit() {
    this.borneService.getAllBorne().subscribe(
      data => {
        this.bornes = data;
      }
    );
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }

  onSelectFile(event) {
    this.file = event.target.files && event.target.files[0];
    if (this.file) {
      const reader = new FileReader();
      reader.readAsDataURL(this.file);
      if (this.file.type.indexOf('image') > -1) {
        this.format = 'image';
      } else if (this.file.type.indexOf('video') > -1) {
        this.format = 'video';
      }
      reader.onload = (event) => {
        this.url = (<FileReader>event.target).result;
      }
    }
    this.uploadForm.get('profile').setValue(this.file);
  }

  upload(id) {
    this.showViaServicePhotoWait();
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('profile').value);
    this.screensaverService.upload(formData, id).subscribe(
      resp => {
        console.log(resp);
        this.showViaServicePhotoOk();
      },
      err => {
        this.showViaServicePhotoEror();
      },
    );
  }

  showViaServicePhotoWait() {
    this.messageService.clear();
    this.messageService.add({ key: 'photo', severity: 'warn', summary: 'Fichier En Cours d' + 'Enregistrement' });
  }
  showViaServicePhotoOk() {
    this.messageService.clear();
    this.messageService.add({ key: 'photo', severity: 'success', summary: 'Fichier Enregistré avec succès' });
  }
  showViaServicePhotoEror() {
    this.messageService.clear();
    this.messageService.add({ key: 'photo', severity: 'error', summary: 'Problème d' + 'Enregistrement' });
  }

  onActivationBorne(id, templateAnnulation: TemplateRef<any>) {
    this.borneService.findById(id).subscribe(
      data => {
        this.borne = data;
        this.borne.maintenance = !data.maintenance;
        this.borneSubscription = this.borneService.updateBorne(this.borne.id, this.borne).subscribe(
          data2 => {
            console.log(data2);
            this.router.navigate(['/bornes']);
          }
        );
      },
      err => {
        if (err.status === 500) {
          this.modalRef.hide();
          this.modalRefAnnul = this.modalService.show(templateAnnulation);
          console.log('STATUS 500');
        }
      }
    );
    this.modalRef.hide();
  }


  public openModal(template: TemplateRef<any>, id: number) {
    this.modalRef = this.modalService.show(template);
  }

  createImageFromBlob(image: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.imageToShow = reader.result;
      console.log()
    }, false);
    if (image) {
      reader.readAsDataURL(image);
    }
  }
  getImageFromService(id: number) {
    this.isImageLoading = true;
    this.screensaverService.getImage(id).subscribe(data => {
      this.createImageFromBlob(data);
      this.isImageLoading = false;
    }, error => {
      this.isImageLoading = false;
      console.log(error);
    });
  }

  getImgContent(): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(this.imageToShow);
  }

  showMaximizableDialog(id: number) {
    this.getImageFromService(id);
    this.getImgContent();
    this.displayMaximizable = true;
  }

  showBasicDialog() {
    this.displayBasic = true;
  }
  showBasicDialogRouleur() {
    this.displayBasicRouleur = true;
  }
  showDialogFTP() {
    this.displayBasicFTP = true;
  }
  showDialogInformation() {
    this.displayBasicInformation = true;
  }

}
