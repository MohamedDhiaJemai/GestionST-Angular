import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceST } from 'app/model/ServiceST.Model';
import { ServiceSTC } from 'app/model/ServiceSTC.model';
import { ServiceStComplementaireComponent } from 'app/service-st-complementaire/service-st-complementaire.component';
import { ImageProduitService } from 'app/services/image-produit/image-produit.service';
import { ServiceSTService } from 'app/services/serviceST/service-st.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MessageService, SelectItem } from 'primeng/api';

export enum sexe {
  FILLE = 'FILLE',
  GARCON = 'GARCON',
  UNISEXE = 'UNISEXE'
}

export enum jour {
  LUNDI = 'LUNDI',
  MARDI = 'MARDI',
  MERCREDI = 'MERCREDI',
  JEUDI = 'JEUDI',
  VENDREDI = 'VENDREDI ',
  SAMEDI = 'SAMEDI',
  DIMANCHE = 'DIMANCHE'
}

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss'],
  providers: [MessageService]
})
export class AddServiceComponent implements OnInit {

  items: SelectItem[];
  jours: SelectItem[]
  selectedJour: any[];
  jourEnvoi: string[] = [];
  serviceST: ServiceST = new ServiceST();
  serviceSTC: ServiceSTC = new ServiceSTC();
  urlphotoST = 'http://localhost:8443/image/get/';
  sexes: SelectItem[];
  item: string;

  url;
  format;
  file: File;
  uploadForm: FormGroup;


  constructor(private serviceSTService: ServiceSTService, private formBuilder: FormBuilder,
    private routerNav: Router, private imageProduitService: ImageProduitService) {
    this.sexes = Object.keys(sexe).map(key => ({ label: sexe[key], value: key }));
    this.jours = Object.keys(jour).map(key => ({ label: jour[key], value: key }));
    this.file = null;
  }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }

  onSelectFile(event) {
    console.log(event)
    this.file = event.target.files && event.target.files[0];
    console.log(this.file)
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

  onAddService() {
    if (this.serviceST.visible === null) {
      this.serviceST.visible = false;
    }

    this.serviceSTService.addService(this.serviceST).subscribe(
      (data: ServiceST) => {
        const formData = new FormData();
        formData.append('file', this.uploadForm.get('profile').value);
        console.log('formdata', formData);
        this.imageProduitService.upload(formData, data.id).subscribe(
          data2 => {
            console.log('ok');
          }
        );
        this.routerNav.navigate(['services'])
      },
      error => console.log(error)
    );
  }

  onAddServiceComplementaire() {
    if (this.serviceSTC.visible === null) {
      this.serviceSTC.visible = false;
    }

    this.selectedJour.forEach(element => {
      console.log(element.label);
      this.jourEnvoi.push(element.label);
    });
    this.serviceSTC.jours = this.jourEnvoi;
    console.log(this.serviceSTC.jours);


    console.log(this.serviceSTC);
    this.serviceSTService.addServiceComplement(this.serviceSTC).subscribe(
      (data: ServiceSTC) => {
        const formData = new FormData();
        formData.append('file', this.uploadForm.get('profile').value);
        console.log('formdata', formData);
        this.imageProduitService.upload(formData, data.id).subscribe(
          data2 => {
            console.log('ok');
          }
        );
        this.routerNav.navigate(['services'])
      },
      error => console.log(error)
    );

  }

}