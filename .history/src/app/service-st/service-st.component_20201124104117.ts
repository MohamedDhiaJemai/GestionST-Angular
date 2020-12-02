import { Component, OnInit } from '@angular/core';
import { ServiceST } from 'app/model/ServiceST.Model';
import { BsModalRef } from 'ngx-bootstrap/modal';
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

  constructor() { }

  ngOnInit(): void {
  }

}
