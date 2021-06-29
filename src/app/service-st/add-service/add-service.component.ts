import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Genre, Jour } from 'app/model/Enums.model';
import { ServiceComplementaire } from 'app/model/ServiceComplementaire.model';
import { ServicePrincipal } from 'app/model/ServicePrincipal.model';
import { ImageProduitService } from 'app/services/image-produit/image-produit.service';
import { ServiceSTService } from 'app/services/serviceST/service-st.service';
import { environment } from 'environments/environment';
import { MessageService, SelectItem } from 'primeng/api';


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
  servicePrincipal: ServicePrincipal = new ServicePrincipal();
  serviceComplementaire: ServiceComplementaire = new ServiceComplementaire();
  urlphotoST = environment.apiUrl + 'image/get/';
  sexes: SelectItem[];
  item: string;

  url;
  format;
  file: File;
  uploadForm: FormGroup;


  constructor(private serviceSTService: ServiceSTService, private formBuilder: FormBuilder,
    private routerNav: Router, private imageProduitService: ImageProduitService) {
    this.sexes = Object.keys(Genre).map(key => ({ label: Genre[key], value: key }));
    this.jours = Object.keys(Jour).map(key => ({ label: Jour[key], value: key }));
    this.file = null;
  }

  ngOnInit() {
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

  onAddService() {
    if (this.servicePrincipal.visible === undefined) {
      this.servicePrincipal.visible = false;
    }
    if (this.url !== undefined) {
      this.serviceSTService.addService(this.servicePrincipal).subscribe(
        (data: ServicePrincipal) => {
          const formData = new FormData();
          formData.append('file', this.uploadForm.get('profile').value);
          this.imageProduitService.upload(formData, data.id).subscribe(
            data2 => { this.routerNav.navigate(['services']) }
          );
        }
      );
    }
  }

  onAddServiceComplementaire() {
    if (this.serviceComplementaire.visible === undefined) {
      this.serviceComplementaire.visible = false;
    }

    if (this.serviceComplementaire.elite === undefined) {
      this.serviceComplementaire.elite = false;
    }

    this.selectedJour.forEach(element => {
      this.jourEnvoi.push(element.label);
    });
    this.serviceComplementaire.jours = this.jourEnvoi;
    if (this.url !== undefined) {
      console.log(this.serviceComplementaire);
      this.serviceSTService.addServiceComplement(this.serviceComplementaire).subscribe(
        (data: ServiceComplementaire) => {
          const formData = new FormData();
          formData.append('file', this.uploadForm.get('profile').value);
          this.imageProduitService.upload(formData, data.id).subscribe(
            data2 => {
              this.routerNav.navigate(['services'])
            }
          );
        }
      );
    }
  }

}
