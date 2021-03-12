import { DatePipe } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Sexe } from 'app/model/Enums.model';
import { JoueurAcamedie } from 'app/model/JoueurAcamedie.model';
import { DocumentsJoueurService } from 'app/services/documents-joueur/documents-joueur.service';
import { JoueurAcademieService } from 'app/services/joueur-academie/joueur-academie.service';
import { ParentService } from 'app/services/parent/parent.service';
import { PhotoService } from 'app/services/photo/photo.service';
import { environment } from 'environments/environment';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MessageService, SelectItem } from 'primeng/api';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-update-joueur-academie',
  templateUrl: './update-joueur-academie.component.html',
  styleUrls: ['./update-joueur-academie.component.css'],
  providers: [MessageService]
})
export class UpdateJoueurAcademieComponent implements OnInit {

  noDeletion = false;
  inputValue: string;
  inputValueImage: number;

  myfile: any[] = [];
  myfilePhoto: any[] = [];

  uploadedFiles: File[] = [];
  uploadedFilesMessage: File[] = [];

  joueurAcademie: JoueurAcamedie = new JoueurAcamedie();
  sexes: SelectItem[];
  itemsParents: SelectItem[];
  item: string;
  date: Date;
  joueurAcademieSubscription: Subscription;
  modalRef: BsModalRef;
  modalRefAnnul: BsModalRef;
  id: number;
  annees: string;

  urlPhoto: string;

  // PHOTO
  url;
  format;
  file: File;
  uploadForm: FormGroup;

  fileInfos: Observable<any>;
  clicked = true;


  constructor(private joueurAcademieService: JoueurAcademieService,
    private parentService: ParentService,
    private messageService: MessageService,
    private photoService: PhotoService,
    private docuementsJoueurService: DocumentsJoueurService,
    private formBuilder: FormBuilder,
    private router: ActivatedRoute, private datePipe: DatePipe,
    private routerNav: Router, private modalService: BsModalService) {
    this.sexes = Object.keys(Sexe).map(key => ({ label: Sexe[key], value: key }));
    this.inputValueImage = 0;
    this.file = null;
  }

  ngOnInit() {

    this.id = this.router.snapshot.params['id'];
    this.urlPhoto = environment.apiUrl + 'photo/get/' + this.id;
    const now = new Date();
    const year = now.getFullYear();
    this.annees = (year - 45).toString() + ':' + (year - 4).toString();
    this.fileInfos = this.docuementsJoueurService.getFiles(this.id);

    this.parentService.getAllParent().subscribe(
      data => {
        this.itemsParents = data;
      }
    );

    this.joueurAcademieService.findById(this.id).subscribe(
      data => {
        this.joueurAcademie = data;
        this.date = new Date(this.joueurAcademie.dateNaissance);
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
      }
      reader.onload = (event) => {
        this.url = (<FileReader>event.target).result;
      }
    }
    this.uploadForm.get('profile').setValue(this.file);
  }

  ngOnUpdateJoueurAcademie(templateAnnulation: TemplateRef<any>) {
    this.joueurAcademie.dateNaissance = this.datePipe.transform(this.date, 'yyyy-MM-dd');
    this.joueurAcademieSubscription = this.joueurAcademieService.updatejAcademie(this.joueurAcademie.id, this.joueurAcademie).subscribe(
      data => {
        if (this.url !== undefined) {
          const formData = new FormData();
          formData.append('file', this.uploadForm.get('profile').value);
          this.photoService.upload(formData, this.joueurAcademie.id).subscribe(
            data2 => {
              this.routerNav.navigate(['/consulter-joueur-academie/' + this.joueurAcademie.id]);
            }
          );
        } else {
          this.routerNav.navigate(['/consulter-joueur-academie/' + this.joueurAcademie.id]);
        }
      },
      err => {
        this.modalRef.hide();
        this.modalRefAnnul = this.modalService.show(templateAnnulation);
      }
    );
    this.modalRef.hide();
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  uploadPhoto(event) {
    this.showViaServicePhotoWait();
    const formData = new FormData();
    formData.append('file', event.files[0]);

    this.photoService.upload(formData, this.id).subscribe(
      resp => {
        this.showViaServicePhotoOk();
        this.myfilePhoto = [];
        this.inputValueImage = this.id;
      },
      err => {
        this.showViaServicePhotoEror();
        this.myfilePhoto = [];
      },
    );
    this.myfilePhoto = [];
    this.inputValueImage = 0;
  }

  showViaServicePhotoWait() {
    this.messageService.clear();
    this.messageService.add({ key: 'photo', severity: 'warn', summary: 'Info Message' });
  }
  showViaServicePhotoOk() {
    this.messageService.clear();
    this.messageService.add({ key: 'photo', severity: 'success', summary: 'Success' });
  }
  showViaServicePhotoEror() {
    this.messageService.clear();
    this.messageService.add({ key: 'photo', severity: 'error', summary: 'Error' });
  }

  showViaServiceWait() {
    this.messageService.clear();
    this.messageService.add({ severity: 'warn', summary: 'Info Message', detail: ' Upload de fichier en cours' });
  }

  showViaServiceOk(resp: string) {
    this.messageService.clear();
    this.messageService.add({ severity: 'success', summary: 'Success', detail: resp });
  }

  showViaServiceEror(resp: string) {
    this.messageService.clear();
    this.messageService.add({ severity: 'error', summary: 'Error', detail: resp });
  }

  upload(event) {
    this.showViaServiceWait();
    this.clicked = false;
    for (let file of event.files) {
      this.uploadedFiles.push(file);
      this.uploadedFilesMessage.push(file);
      let formData = new FormData();
      formData.append('file', file);
      this.docuementsJoueurService.upload(formData, this.id).subscribe(
        resp => {
          this.showViaServiceOk(resp.message);
          this.clicked = true;
          this.inputValue = resp.message;
        },
        err => {
          this.showViaServiceEror(err.error.message);
          this.clicked = true;
          this.uploadedFiles.pop()
          this.uploadedFilesMessage.pop();
        },
      );
    }
    this.myfile = [];
  }

}
