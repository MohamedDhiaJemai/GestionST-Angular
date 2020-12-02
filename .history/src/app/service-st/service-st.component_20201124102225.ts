import { Component, OnInit } from '@angular/core';
import { ServiceST } from 'app/model/ServiceST.Model';

@Component({
  selector: 'app-service-st',
  templateUrl: './service-st.component.html',
  styleUrls: ['./service-st.component.css']
})
export class ServiceSTComponent implements OnInit {
  
  service: ServiceST[];
  sortOptions: SelectItem[];

  sortOrder: number;
  sortField: string;
  sortKey: string;

  constructor() { }

  ngOnInit(): void {
  }

}
