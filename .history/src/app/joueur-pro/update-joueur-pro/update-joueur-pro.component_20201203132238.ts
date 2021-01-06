import { DatePipe } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JoueurPro } from 'app/model/JoueurPro.model';
import { CategorieService } from 'app/services/categorie/categorie.service';
import { JoueurProService } from 'app/services/joueur-pro/joueur-pro.service';
import { PhotoService } from 'app/services/photo/photo.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SelectItem } from 'primeng/api';
import { Subscription } from 'rxjs';

export enum sexe {
  FILLE = 'FILLE',
  GARCON = 'GARCON'
}

@Component({
  selector: 'app-update-joueur-pro',
  templateUrl: './update-joueur-pro.component.html',
  styleUrls: ['./update-joueur-pro.component.css']
})
export class UpdateJoueurProComponent implements OnInit {

  joueurPro: JoueurPro = new JoueurPro();
  sexes: SelectItem[];
  itemsCategories: SelectItem[];
  item: string;
  date: Date;
  joueurProSubscription: Subscription;
  modalRef: BsModalRef;
  modalRefAnnul: BsModalRef;

  // PHOTO
  url;
  format;
  file: File;
  uploadForm: FormGroup;

  urlPhoto: string;

  id: number;

  constructor(private joueurProService: JoueurProService,
    private formBuilder: FormBuilder,
    private categorieService: CategorieService,
    private photoService: PhotoService;
    private router: ActivatedRoute, private datePipe: DatePipe,
    private routerNav: Router, private modalService: BsModalService) {
    this.sexes = Object.keys(sexe).map(key => ({ label: sexe[key], value: key }));
    this.file = null;
  }

  ngOnInit() {

    this.id = this.router.snapshot.params['id'];
    this.urlPhoto = 'http://192.168.0.143:8443/photo/get/' + this.id;
    this.categorieService.getAllCategorie().subscribe(
      data => {
        this.itemsCategories = data;
      }
    );

    this.joueurProService.findById(this.id).subscribe(
      data => {
        this.joueurPro = data;
        this.date = new Date(this.joueurPro.dateNaissance);
        console.log(this.joueurPro)
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

  ngOnUpdateJoueurPro(templateAnnulation: TemplateRef<any>) {
    this.joueurPro.dateNaissance = this.datePipe.transform(this.date, 'yyyy-MM-dd');
    this.joueurProSubscription = this.joueurProService.updatejProfessionnel(this.joueurPro.id, this.joueurPro).subscribe(
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


        this.routerNav.navigate(['/consulter-joueur-professionnel/' + this.joueurPro.id]);
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

}
