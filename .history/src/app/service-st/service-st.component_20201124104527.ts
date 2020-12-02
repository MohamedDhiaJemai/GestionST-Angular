import { Component, OnInit } from '@angular/core';
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
  selector: 'app-service-st',
  templateUrl: './service-st.component.html',
  styleUrls: ['./service-st.component.css'],
  providers: [MessageService]
})
export class ServiceSTComponent implements OnInit {

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

  ngOnInit(): void {
  }

}
