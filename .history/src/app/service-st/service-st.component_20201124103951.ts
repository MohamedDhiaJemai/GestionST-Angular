import { Component, OnInit } from '@angular/core';

export enum sexe {
  FILLE = 'FILLE',
  GARCON = 'GARCON',
  UNISEXE = 'UNISEXE'
}

@Component({
  selector: 'app-service-st',
  templateUrl: './service-st.component.html',
  styleUrls: ['./service-st.component.css']
})
export class ServiceSTComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
