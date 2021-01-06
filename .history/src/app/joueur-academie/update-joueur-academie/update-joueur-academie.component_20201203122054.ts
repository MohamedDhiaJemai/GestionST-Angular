import { DatePipe } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JoueurAcamedie } from 'app/model/JoueurAcamedie.model';
import { CategorieService } from 'app/services/categorie/categorie.service';
import { JoueurAcademieService } from 'app/services/joueur-academie/joueur-academie.service';
import { ParentService } from 'app/services/parent/parent.service';
import { PhotoService } from 'app/services/photo/photo.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MessageService, SelectItem } from 'primeng/api';
import { Subscription } from 'rxjs';


export enum sexe {
  FILLE = 'FILLE',
  GARCON = 'GARCON'
}

@Component({
  selector: 'app-update-joueur-academie',
  templateUrl: './update-joueur-academie.component.html',
  styleUrls: ['./update-joueur-academie.component.css'],
  providers: [MessageService]
})
export class UpdateJoueurAcademieComponent implements OnInit {

  inputValueImage: number;

  myfilePhoto: any[] = [];

  joueurAcademie: JoueurAcamedie = new JoueurAcamedie();
  sexes: SelectItem[];
  itemsParents: SelectItem[];
  item: string;
  date: Date;
  joueurAcademieSubscription: Subscription;
  modalRef: BsModalRef;
  modalRefAnnul: BsModalRef;
  id: number;

  urlPhoto: string;

  // PHOTO
  url;
  format;
  file: File;
  uploadForm: FormGroup;

  constructor(private joueurAcademieService: JoueurAcademieService,
    private parentService: ParentService,
    private messageService: MessageService,
    private photoService: PhotoService,
    private formBuilder: FormBuilder,
    private router: ActivatedRoute, private datePipe: DatePipe,
    private routerNav: Router, private modalService: BsModalService) {
    this.sexes = Object.keys(sexe).map(key => ({ label: sexe[key], value: key }));
    this.inputValueImage = 0;
    this.file = null;
  }

  ngOnInit() {

    this.id = this.router.snapshot.params['id'];
    this.urlPhoto = 'http://192.168.0.143:8443/photo/get/' + this.id;

    this.parentService.getAllParent().subscribe(
      data => {
        this.itemsParents = data;
      }
    );

    this.joueurAcademieService.findById(this.id).subscribe(
      data => {
        this.joueurAcademie = data;
        this.date = new Date(this.joueurAcademie.dateNaissance);
        console.log(this.joueurAcademie)
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
          console.log('formdata', formData);
          this.photoService.upload(formData, this.joueurAcademie.id).subscribe(
            data2 => {
              console.log('ok');
            }
          );
        }


        this.routerNav.navigate(['/consulter-joueur-academie/' + this.joueurAcademie.id]);
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
