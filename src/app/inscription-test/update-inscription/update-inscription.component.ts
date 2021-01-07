import { DatePipe } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InscriptionTest } from 'app/model/InscriptionTest.model';
import { CategorieService } from 'app/services/categorie/categorie.service';
import { InscriptionTestService } from 'app/services/inscription-test/inscription-test.service';
import { PhotoTestService } from 'app/services/photo-test/photo-test.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MessageService, SelectItem } from 'primeng/api';
import { Observable, Subscription } from 'rxjs';

export enum sexe {
  FILLE = 'FILLE',
  GARCON = 'GARCON'
}

@Component({
  selector: 'app-update-inscription',
  templateUrl: './update-inscription.component.html',
  styleUrls: ['./update-inscription.component.css'],
  providers: [MessageService]
})
export class UpdateInscriptionComponent implements OnInit {

  inputValue: string;
  inputValueImage: number;

  myfile: any[] = [];
  myfilePhoto: any[] = [];


  inscription: InscriptionTest = new InscriptionTest();
  sexes: SelectItem[];
  categories: SelectItem[];

  item: string;
  inscriptionSubscription: Subscription;
  modalRef: BsModalRef;
  modalRefAnnul: BsModalRef;
  id: number;

  annees: string;
  urlPhoto: string;
  date: Date;
  // PHOTO
  url;
  format;
  file: File;
  uploadForm: FormGroup;

  fileInfos: Observable<any>;
  clicked = true;

  constructor(private inscriptionTestService: InscriptionTestService,
    private messageService: MessageService,
    private photoService: PhotoTestService,
    private categorieService: CategorieService,
    private formBuilder: FormBuilder,
    private router: ActivatedRoute, private datePipe: DatePipe,
    private routerNav: Router, private modalService: BsModalService) {
    this.sexes = Object.keys(sexe).map(key => ({ label: sexe[key], value: key }));
    this.inputValueImage = 0;
    this.file = null;
  }

  ngOnInit() {

    this.id = this.router.snapshot.params['id'];
    this.urlPhoto = 'http://127.0.0.1:8443/photo-test/get/' + this.id;

    const now = new Date();
    const year = now.getFullYear();
    this.annees = (year - 45).toString() + ':' + (year - 4).toString();
    console.log(this.annees);

    this.categorieService.getAllCategorie().subscribe(
      data => {
        this.categories = data;
      }
    );

    this.inscriptionTestService.findById(this.id).subscribe(
      data => {
        this.inscription = data;
        this.date = new Date(this.inscription.dateNaissance);
        console.log(this.inscription)
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

  ngOnUpdateInscription(templateAnnulation: TemplateRef<any>) {
    this.inscription.dateNaissance = this.datePipe.transform(this.date, 'yyyy-MM-dd');
    // this.inscription.dateNaissance = new Date(Date.UTC(this.date.getFullYear(), this.date.getMonth(), this.date.getDate()));
    this.inscriptionSubscription = this.inscriptionTestService.update(this.inscription.id, this.inscription).subscribe(
      data => {

        if (this.url !== undefined) {
          const formData = new FormData();
          formData.append('file', this.uploadForm.get('profile').value);
          console.log('formdata', formData);
          this.photoService.upload(formData, this.inscription.id).subscribe(
            data2 => {
              console.log('ok');
            }
          );
        }


        this.routerNav.navigate(['/consulter-inscription/' + this.inscription.id]);
      },
      err => {
        if (err.status === 500) {
          this.modalRef.hide();
          this.modalRefAnnul = this.modalService.show(templateAnnulation);
          console.log('STATUS 500');
          // this.routerNav.navigateByUrl('/role/details/' + id);
        }
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
    console.log('my file ', this.myfilePhoto)
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

}
