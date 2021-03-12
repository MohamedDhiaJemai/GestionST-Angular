import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Borne } from 'app/model/Borne.model';
import { Caisse } from 'app/model/Caisse.model';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';
import { BorneService } from 'app/services/borne/borne.service';
import { CaisseService } from 'app/services/caisse/caisse.service';
import { ScreensaverBorneService } from 'app/services/screensaver-borne/screensaver-borne.service';
import { environment } from 'environments/environment';
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
  modalRef: BsModalRef;
  bornes: Borne[];
  selectedBorne: Borne;
  borneSelected: Borne;
  borneSubscription: Subscription;
  borne: Borne = new Borne();
  @ViewChild('dt') table: Table;
  displayBasicCaisse: boolean;
  displayBasicMateriel: boolean;
  displayBasicConnexion: boolean;
  displayHibernate: boolean;
  edition: boolean;
  consultation: boolean;
  consultationCaisse: boolean;
  caisse: Caisse;
  file: File;
  format: string;
  url: string | ArrayBuffer;
  uploadForm: FormGroup;
  urlPhoto = environment.apiUrl + 'screensaver/get/';
  constructor(private borneService: BorneService, private router: Router,
    private caisseService: CaisseService, private messageService: MessageService,
    private screensaverService: ScreensaverBorneService, private formBuilder: FormBuilder,
    private autorisationService: AutorisationService, private modalService: BsModalService) {
    this.file = null;
  }
  ngOnInit() {
    this.caisse = null;
    const obj = this.autorisationService.checkAutorisations2('bornes', 'caisses');
    this.edition = obj.edition;
    this.consultation = obj.consultation;
    this.consultationCaisse = obj.consultationSup;
    this.borneService.getAllBorne().subscribe(
      data => {
        this.bornes = data;
      }
    );
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
        this.showViaServicePhotoOk();
      },
      err => {
        this.showViaServicePhotoEror();
      },
    );
  }
  showViaServicePhotoWait() {
    this.messageService.clear();
    this.messageService.add({ key: 'photo', severity: 'warn', summary: 'Fichier En Cours d\'' + 'enregistrement' });
  }
  showViaServicePhotoOk() {
    this.messageService.clear();
    this.messageService.add({ key: 'photo', severity: 'success', summary: 'Fichier Enregistré avec succès' });
  }
  showViaServicePhotoEror() {
    this.messageService.clear();
    this.messageService.add({ key: 'photo', severity: 'error', summary: 'Problème d\'' + 'Enregistrement' });
  }
  showBasicDialogCaisse(born: Borne) {
    this.borneSelected = born;
    this.caisse = null;
    this.caisseService.findCaisse(born.id).subscribe(data => {
      this.caisse = data;
      this.displayBasicCaisse = true;
    });
  }
  showDialogConnexion(born: Borne) {
    this.borneSelected = born;
    this.displayBasicConnexion = true;
  }
  showDialogMateriel(born: Borne) {
    this.borneSelected = born;
    this.displayBasicMateriel = true;
  }
  showHibernate(born: Borne) {
    this.format = undefined;
    this.url = undefined;
    this.borneSelected = born;
    this.getFileType(born.id);
    this.file = undefined;
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }
  getFileType(id: number) {
    this.displayHibernate = true;
    this.messageService.clear();
    this.messageService.add({ key: 'photo', severity: 'warn', summary: 'Fichier en cours de préparation' });
    this.screensaverService.getFileType(id).subscribe(data => {
      const type: string = data;
      if (type.includes('image')) {
        this.format = 'image';
      } else if (type.includes('video')) {
        this.format = 'video';
      }
      this.messageService.clear();
    });
  }
  maintenance() {
    this.borneSelected.maintenance = !this.borneSelected.maintenance;
    this.borneService.maintenance(this.borneSelected.id).subscribe(data => {
      this.modalRef.hide();
    },
      err => {
        this.borneSelected.maintenance = !this.borneSelected.maintenance;
        this.modalRef.hide();
      });
  }

  public openModal(template: TemplateRef<any>, born: Borne) {
    this.borneSelected = born;
    this.modalRef = this.modalService.show(template);
  }
}
