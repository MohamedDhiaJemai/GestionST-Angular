import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceAutre } from 'app/model/ServiceAutre.model';
import { ServiceComplementaire } from 'app/model/ServiceComplementaire.model';
import { ServicePrincipal } from 'app/model/ServicePrincipal.model';
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


@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.css'],
  providers: [MessageService]
})
export class UpdateServiceComponent implements OnInit {

  servicePrincipal: ServicePrincipal = new ServicePrincipal();
  serviceComplementaire: ServiceComplementaire = new ServiceComplementaire();
  serviceAutre: ServiceAutre = new ServiceAutre();
  typeService: string;
  urlphotoService: string;
  sexes: SelectItem[];
  serviceSTSubscription: Subscription;
  modalRef: BsModalRef;
  modalRefAnnul: BsModalRef;
  url;
  format;
  file: File;
  uploadForm: FormGroup;
  selectedJour: any[] = [];
  jours = [
    { label: 'LUNDI', value: 'LUNDI' },
    { label: 'MARDI', value: 'MARDI' },
    { label: 'MERCREDI', value: 'MERCREDI' },
    { label: 'JEUDI', value: 'JEUDI' },
    { label: 'VENDREDI', value: 'VENDREDI' },
    { label: 'SAMEDI', value: 'SAMEDI' },
    { label: 'DIMANCHE', value: 'DIMANCHE' }
  ];

  constructor(private serviceSTService: ServiceSTService, private router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private routerNav: Router, private modalService: BsModalService,
    private messageService: MessageService, private imageProduitService: ImageProduitService) {
    this.sexes = Object.keys(sexe).map(key => ({ label: sexe[key], value: key }));
    this.file = null;
  }

  ngOnInit() {
    const id = this.router.snapshot.params['id'];
    this.urlphotoService = 'http://127.0.0.1:8443/image/get/' + id;
    this.serviceSTService.findById(id).subscribe(
      data => {
        if (data === null) {
          this.serviceSTService.findByIdComplement(id).subscribe(
            (dataComp: ServiceComplementaire) => {
              if (dataComp === null) {
                this.serviceSTService.findByIdAutre(id).subscribe(
                  (dataAutre: ServiceAutre) => {
                    this.typeService = 'autre';
                    this.serviceAutre = dataAutre;
                    console.log('serviceAutre', this.serviceAutre)
                  });
              } else {
                console.log('complementaire')
                this.typeService = 'complementaire';
                this.serviceComplementaire = dataComp;
                this.serviceComplementaire.jours.forEach(element => {
                  this.selectedJour.push(element);
                });
                console.log('serviceComplementaire', this.serviceComplementaire)
              }
            }
          );
        } else {
          console.log('principal')
          this.typeService = 'principal';
          this.servicePrincipal = data;
          console.log('servicePrincipal', this.servicePrincipal)
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

  ngOnUpdateServicePrincipale(templateAnnulation: TemplateRef<any>, type) {
    console.log('SERVICE PRINCIPALE');
    console.log(this.servicePrincipal.id);
    this.serviceSTSubscription = this.serviceSTService.updateService(this.servicePrincipal.id, this.servicePrincipal).subscribe(
      data => {
        if (this.url !== undefined) {
          const formData = new FormData();
          formData.append('file', this.uploadForm.get('profile').value);
          console.log('formdata', formData);
          this.imageProduitService.upload(formData, this.servicePrincipal.id).subscribe(
            data2 => {
              console.log('ok');
            }
          );
        }
        this.routerNav.navigate(['/consulter-service/' + this.servicePrincipal.id]);
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

  ngOnUpdateServiceComplementaire(templateAnnulation: TemplateRef<any>) {
    console.log('SERVICE COMPLEMENTAIRE');
    this.serviceComplementaire.jours = this.selectedJour;
    this.serviceSTSubscription = this.serviceSTService.updateServiceComplement(this.serviceComplementaire.id, this.serviceComplementaire)
      .subscribe(data => {
        if (this.url !== undefined) {
          const formData = new FormData();
          formData.append('file', this.uploadForm.get('profile').value);
          console.log('formdata', formData);
          this.imageProduitService.upload(formData, this.serviceComplementaire.id).subscribe(
            data2 => {
              console.log('ok');
            }
          );
        }
        this.routerNav.navigate(['/consulter-service/' + this.serviceComplementaire.id]);
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

  ngOnUpdateServiceAutre(templateAnnulation: TemplateRef<any>, type) {
    console.log('SERVICE Autre');
    console.log(this.serviceAutre.id);
    this.serviceSTSubscription = this.serviceSTService.updateServiceAutre(this.serviceAutre.id, this.serviceAutre).subscribe(
      data => {
        if (this.url !== undefined) {
          const formData = new FormData();
          formData.append('file', this.uploadForm.get('profile').value);
          console.log('formdata', formData);
          this.imageProduitService.upload(formData, this.serviceAutre.id).subscribe(
            data2 => {
              console.log('ok');
            }
          );
        }
        this.routerNav.navigate(['/consulter-service/' + this.serviceAutre.id]);
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

  // ngOnUpdateService(templateAnnulation: TemplateRef<any>) {
  //   console.log(this.test);
  //   if (this.test = false) {

  //   } else if (this.test = true) {

  //   }
  // }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
