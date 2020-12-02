import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceST } from 'app/model/ServiceST.Model';
import { ServiceSTService } from 'app/services/serviceST/service-st.service';
import { SelectItem } from 'primeng/api';

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

  constructor(private serviceSTService: ServiceSTService, private router: ActivatedRoute) { }

  ngOnInit(): void {

    this.serviceSTService.getAllService().subscribe(
      data => {
        console.log(data)
        this.articles = data;
      }
    );
    this.sortOptions = [
      { label: 'GARCON', value: 'GARCON' },
      { label: 'FILLE', value: 'FILLE' },
      { label: 'UNISEXE', value: 'UNISEXE' }
    ];
  }

}
