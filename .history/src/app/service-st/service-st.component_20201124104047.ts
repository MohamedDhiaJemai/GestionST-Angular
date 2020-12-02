import { Component, OnInit } from '@angular/core';
import { ServiceST } from 'app/model/ServiceST.Model';
import { MessageService } from 'primeng/api';

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
  urlphotoArticle = 'http://192.168.0.143:8443/image/get/';

  sexes: SelectItem[];
  item: string;

  articleSubscription: Subscription;

  modalRef: BsModalRef;
  modalRefAnnul: BsModalRef;

  myfile: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
