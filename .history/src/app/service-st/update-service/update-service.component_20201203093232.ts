import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceST } from 'app/model/ServiceST.Model';
import { ServiceSTC } from 'app/model/ServiceSTC.model';
import { ImageProduitService } from 'app/services/image-produit/image-produit.service';
import { ServiceSTService } from 'app/services/serviceST/service-st.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MessageService, SelectItem } from 'primeng/api';
import { Subscription } from 'rxjs';


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
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.css'],
  providers: [MessageService]
})
export class UpdateServiceComponent implements OnInit {


  serviceST: ServiceST = new ServiceST();
  serviceSTC: ServiceSTC = new ServiceSTC();
  test: boolean;
  urlphotoService: string;
  sexes: SelectItem[];
  item: string;
  serviceSTSubscription: Subscription;
  modalRef: BsModalRef;
  modalRefAnnul: BsModalRef;
  url;
  format;
  file: File;
  uploadForm: FormGroup;

  selectedJour: any[] = [];
  jours: SelectItem[]


  constructor(private serviceSTService: ServiceSTService, private router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private routerNav: Router, private modalService: BsModalService,
    private messageService: MessageService, private imageProduitService: ImageProduitService) {
    this.sexes = Object.keys(sexe).map(key => ({ label: sexe[key], value: key }));
    this.jours = Object.keys(jour).map(key => ({ label: jour[key], value: key }));
    this.file = null;
  }

  ngOnInit() {
    const id = this.router.snapshot.params['id'];
    this.urlphotoService = 'http://192.168.0.143:8443/image/get/' + id;

    this.serviceSTService.findById(id).subscribe(
      data => {
        if (data === null) {
          this.serviceSTService.findByIdComplement(id).subscribe(
            (datac: ServiceSTC) => {
              console.log('complementaire')
              this.test = true;
              this.serviceSTC = datac;
              this.jours.map((item) => this.selectedJour.push(item.value));
              // this.serviceSTC.jours.forEach(element => {
              //   // this.selectedJour.push(element);
              //   // this.selectedJour = Object.keys(element).map(key => ({ label: element[key], value: key }));
              // });
              console.log('Jours', this.selectedJour)
            }
          );
        } else {
          this.test = false;
          this.serviceST = data;
          console.log('serviceST', this.serviceST)
        }
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

  ngOnUpdateService(templateAnnulation: TemplateRef<any>) {
    console.log(this.test)
    this.serviceSTSubscription = this.serviceSTService.updateService(this.serviceST.id, this.serviceST).subscribe(
      data => {
        if (this.url !== undefined) {
          const formData = new FormData();
          formData.append('file', this.uploadForm.get('profile').value);
          console.log('formdata', formData);
          this.imageProduitService.upload(formData, this.serviceST.id).subscribe(
            data2 => {
              console.log('ok');
            }
          );
        }
        this.routerNav.navigate(['/consulter-service/' + this.serviceST.id]);
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

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
