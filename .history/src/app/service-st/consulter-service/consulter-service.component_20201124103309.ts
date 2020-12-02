import { Component, OnInit } from '@angular/core';
import { ServiceST } from 'app/model/ServiceST.Model';

@Component({
  selector: 'app-consulter-service',
  templateUrl: './consulter-service.component.html',
  styleUrls: ['./consulter-service.component.css']
})
export class ConsulterServiceComponent implements OnInit {

  serviceST: ServiceST = new ServiceST();
  urlphotoServiceST = 'http://192.168.0.143:8443/image/get/';

  constructor() { }

  ngOnInit(): void {
  }

}
