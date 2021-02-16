import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceAutre } from 'app/model/ServiceAutre.model';
import { ServiceComplementaire } from 'app/model/ServiceComplementaire.model';
import { ServicePrincipal } from 'app/model/ServicePrincipal.model';
import { ImageProduitService } from 'app/services/image-produit/image-produit.service';
import { ServiceSTService } from 'app/services/serviceST/service-st.service';
import { environment } from 'environments/environment';
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
    this.urlphotoService = environment.apiUrl + 'image/get/' + id;
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
                  });
              } else {
                this.typeService = 'complementaire';
                this.serviceComplementaire = dataComp;
                this.serviceComplementaire.jours.forEach(element => {
                  this.selectedJour.push(element);
                });
              }
            }
          );
        } else {
          this.typeService = 'principal';
          this.servicePrincipal = data;
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
    this.serviceSTSubscription = this.serviceSTService.updateService(this.servicePrincipal.id, this.servicePrincipal).subscribe(
      data => {
        if (this.url !== undefined) {
          const formData = new FormData();
          formData.append('file', this.uploadForm.get('profile').value);
          this.imageProduitService.upload(formData, this.servicePrincipal.id).subscribe(
            data2 => {
              this.routerNav.navigate(['/consulter-service/' + this.servicePrincipal.id]);
            }
          );
        }
      }, err => {
        this.modalRef.hide();
        this.modalRefAnnul = this.modalService.show(templateAnnulation);
      }
    );
    this.modalRef.hide();
  }

  ngOnUpdateServiceComplementaire(templateAnnulation: TemplateRef<any>) {
    this.serviceComplementaire.jours = this.selectedJour;
    this.serviceSTSubscription = this.serviceSTService.updateServiceComplement(this.serviceComplementaire.id, this.serviceComplementaire)
      .subscribe(data => {
        if (this.url !== undefined) {
          const formData = new FormData();
          formData.append('file', this.uploadForm.get('profile').value);
          this.imageProduitService.upload(formData, this.serviceComplementaire.id).subscribe(
            data2 => {
              this.routerNav.navigate(['/consulter-service/' + this.serviceComplementaire.id]);
            }
          );
        }
      }, err => {
        this.modalRef.hide();
        this.modalRefAnnul = this.modalService.show(templateAnnulation);
      }
      );
    this.modalRef.hide();
  }

  ngOnUpdateServiceAutre(templateAnnulation: TemplateRef<any>, type) {
    this.serviceSTSubscription = this.serviceSTService.updateServiceAutre(this.serviceAutre.id, this.serviceAutre).subscribe(
      data => {
        if (this.url !== undefined) {
          const formData = new FormData();
          formData.append('file', this.uploadForm.get('profile').value);
          this.imageProduitService.upload(formData, this.serviceAutre.id).subscribe(
            data2 => {
              this.routerNav.navigate(['/consulter-service/' + this.serviceAutre.id]);
            }
          );
        }
      }, err => {
        this.modalRef.hide();
        this.modalRefAnnul = this.modalService.show(templateAnnulation);
      }
    );
    this.modalRef.hide();
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
