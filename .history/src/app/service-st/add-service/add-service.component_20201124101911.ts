import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceST } from 'app/model/ServiceST.Model';
import { ServiceSTService } from 'app/services/serviceST/service-st.service';
import { SelectItem } from 'primeng/api';

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

  constructor( private router: ActivatedRoute, private serviceSTService: ServiceSTService) { }

  ngOnInit(){
  }

}
