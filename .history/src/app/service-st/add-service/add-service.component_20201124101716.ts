import { Component, OnInit } from '@angular/core';
import { ServiceST } from 'app/model/ServiceST.Model';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss']
})
export class AddServiceComponent implements OnInit {

  service: ServiceST[];
  sortOptions: SelectItem[];

  sortOrder: number;
  sortField: string;
  sortKey: string;

  constructor() { }

  ngOnInit(): void {
  }

}
