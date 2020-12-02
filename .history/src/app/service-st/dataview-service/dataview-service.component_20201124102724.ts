import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceST } from 'app/model/ServiceST.Model';
import { ServiceSTService } from 'app/services/serviceST/service-st.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-dataview-service',
  templateUrl: './dataview-service.component.html',
  styleUrls: ['./dataview-service.component.css']
})
export class DataviewServiceComponent implements OnInit {

  services: ServiceST[];
  sortOptions: SelectItem[];

  sortOrder: number;
  sortField: string;
  sortKey: string;

  constructor(private serviceSTService: ServiceSTService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.serviceSTService.getAllService().subscribe(
      data => {
        console.log(data)
        this.service = data;
      }
    );
    this.sortOptions = [
      { label: 'GARCON', value: 'GARCON' },
      { label: 'FILLE', value: 'FILLE' },
      { label: 'UNISEXE', value: 'UNISEXE' }
    ];
  }

  onSortChange(event) {
    const value = event.value;
    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else if (value.indexOf('UNISEXE') === 'UNISEXE') {
      this.sortKey = 'UNISEXE';
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

}
