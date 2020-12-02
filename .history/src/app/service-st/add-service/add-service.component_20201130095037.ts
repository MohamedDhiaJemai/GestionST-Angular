import { Component, OnInit, TemplateRef } from '@angular/core';
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

  urlphotoST = 'http://192.168.0.143:8443/image/get/';

  sexes: SelectItem[];


  item: string;
  myfile: any[] = [];


  constructor(private serviceSTService: ServiceSTService, private router: ActivatedRoute,
    private routerNav: Router,
    private messageService: MessageService, private imageProduitService: ImageProduitService) {
    this.sexes = Object.keys(sexe).map(key => ({ label: sexe[key], value: key }));

    this.jours = Object.keys(jour).map(key => ({ label: jour[key], value: key }));

  }

  upload(event, id) {
    this.showViaServiceWait();
    const formData = new FormData();
    formData.append('file', event.files[0]);

    this.imageProduitService.upload(formData, id).subscribe(
      data => {
        this.showViaServiceOk();
        this.myfile = [];
        this.ngOnInit();
      },
      err => {
        this.showViaServiceEror();
        this.myfile = [];
        this.ngOnInit();
      },
    );
  }

  ngOnInit(): void {
  }

  onAddService() {
    if (this.serviceST.visible === null) {
      this.serviceST.visible = false;
    }
    console.log('add service ', this.serviceST)
    this.serviceSTService.addService(this.serviceST).subscribe(
      data => {
        // this.upload(photo, this.serviceST.id);
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
      data => {
        this.routerNav.navigate(['services'])
      },
      error => console.log(error)
    );

  }

  showViaServiceWait() {
    this.messageService.clear();
    this.messageService.add({ key: 'photo', severity: 'warn', summary: 'Info Message' });
  }
  showViaServiceOk() {
    this.messageService.clear();
    this.messageService.add({ key: 'photo', severity: 'success', summary: 'Success' });
  }
  showViaServiceEror() {
    this.messageService.clear();
    this.messageService.add({ key: 'photo', severity: 'error', summary: 'Error' });
  }

}
