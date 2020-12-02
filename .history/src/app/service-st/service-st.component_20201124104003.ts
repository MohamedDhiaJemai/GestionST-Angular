import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}
