import { Component, OnInit } from '@angular/core';
import { ServiceST } from 'app/model/ServiceST.Model';
import { MessageService } from 'primeng/api';

export enum sexe {
  FILLE = 'FILLE',
  GARCON = 'GARCON',
  UNISEXE = 'UNISEXE'
}

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss'],
  providers: [MessageService]
})
export class AddServiceComponent implements OnInit {

  serviceST: ServiceST = new ServiceST();
  urlphotoST = 'http://192.168.0.143:8443/image/get/';

  sexes: SelectItem[];
  item: string;

  modalRef: BsModalRef;
  modalRefAnnul: BsModalRef;

  myfile: any[] = [];


  constructor() { }

  ngOnInit() {
  }

}
