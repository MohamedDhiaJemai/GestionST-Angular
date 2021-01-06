import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  uploadForm: FormGroup;

  eventToSend: any[] = [];


  public vimeoUploadForm: FormGroup;


  urlPhoto = 'http://192.168.0.143:8443/screensaver/get/';

  constructor(private borneService: BorneService, private messageService: MessageService,
    private formBuilder: FormBuilder, private screensaverService: ScreensaverBorneService,
    private modalService: BsModalService, private router: Router) {
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

  onSelectFile(event, id) {
    this.eventToSend = event;
    console.log(event.files)
    this.file = event.target.files && event.target.files[0];
    console.log(this.file)
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

  // checkAllowedType(filetype: string): boolean {
  //   const allowed = ['mov', 'wmv', 'avi', 'flv', 'mp4'];
  //   const videoType = filetype.split('/').pop();
  //   return allowed.includes(videoType);
  // }

  upload(id) {

    if (this.format === 'image') {
      console.log(this.format)
      const formData = new FormData();
      formData.append('file', this.uploadForm.get('profile').value);
      console.log('File Image ', this.uploadForm.get('profile').value)
      console.log('formdata', formData);
      this.screensaverService.upload(formData, id).subscribe(
        data2 => {
          console.log('ok', data2);
        }
      );
    } else if (this.format === 'video') {
      console.log(this.format)
      const formData = new FormData();
      formData.append('file', this.uploadForm.get('profile').value);
      console.log('File Image ', this.uploadForm.get('profile').value)
      console.log('formdata', formData);
      this.screensaverService.upload(formData, id).subscribe(
        data2 => {
          console.log('ok');
        }
      );
    }
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

  showMaximizableDialog() {
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
