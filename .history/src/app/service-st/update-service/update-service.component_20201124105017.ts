import { Component, OnInit, TemplateRef } from '@angular/core';
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
  urlphotoService = 'http://192.168.0.143:8443/image/get/';

  sexes: SelectItem[];
  item: string;

  serviceSTSubscription: Subscription;

  modalRef: BsModalRef;
  modalRefAnnul: BsModalRef;

  myfile: any[] = [];

  constructor(private serviceSTService: ServiceSTService, private router: ActivatedRoute,
    private routerNav: Router, private modalService: BsModalService,
    private messageService: MessageService, private imageProduitService: ImageProduitService) {
    this.sexes = Object.keys(sexe).map(key => ({ label: sexe[key], value: key }));
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

  ngOnInit() {

    const id = this.router.snapshot.params['id'];
    this.serviceSTService.findById(id).subscribe(
      data => {
        this.serviceST = data;
      }
    );
  }

  ngOnUpdateArticle(templateAnnulation: TemplateRef<any>) {
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
