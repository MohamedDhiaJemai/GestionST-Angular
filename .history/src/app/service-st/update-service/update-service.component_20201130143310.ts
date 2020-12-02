import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceST } from 'app/model/ServiceST.Model';
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


  serviceST: ServiceST = new ServiceST();
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

  constructor(private serviceSTService: ServiceSTService, private router: ActivatedRoute,
    private routerNav: Router, private modalService: BsModalService,
    private messageService: MessageService, private imageProduitService: ImageProduitService) {
    this.sexes = Object.keys(sexe).map(key => ({ label: sexe[key], value: key }));
    this.file = null;
  }

  ngOnInit() {
    const id = this.router.snapshot.params['id'];
    this.urlphotoService = 'http://192.168.0.143:8443/image/get/' + id;
    this.serviceSTService.findById(id).subscribe(
      data => {
        this.serviceST = data;
      }
    );
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }

  ngOnUpdateService(templateAnnulation: TemplateRef<any>) {
    this.serviceSTSubscription = this.serviceSTService.updateService(this.serviceST.id, this.serviceST).subscribe(
      data => {
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
