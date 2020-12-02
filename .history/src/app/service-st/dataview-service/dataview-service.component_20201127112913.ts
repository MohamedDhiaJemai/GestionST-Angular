import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceST } from 'app/model/ServiceST.Model';
import { ServiceSTService } from 'app/services/serviceST/service-st.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-dataview-service',
  templateUrl: './dataview-service.component.html',
  styleUrls: ['./dataview-service.component.scss']
})
export class DataviewServiceComponent implements OnInit {

  @Input() someInput: string;

  services: ServiceST[] = [];
  services1: ServiceST[] = [];
  services2: ServiceST[] = [];

  sortOptions: SelectItem[];

  sortOrder: number;
  sortField: string;
  sortKey: string;

  constructor(private serviceSTService: ServiceSTService, private router: ActivatedRoute) { }

  ngOnInit() {
    if (this.someInput === 'principal') {
      this.serviceSTService.getAllService().subscribe(
        data => {
          console.log('principal')
          this.services = data;
        }
      );

    } else if (this.someInput === 'complementaire') {
      this.serviceSTService.getAllServiceComplement().subscribe(
        data => {
          console.log('data')
          this.services = data;
        }
      );

    } else if (this.someInput === 'others') {

      this.serviceSTService.getAllService().subscribe(
        data => {
          this.services = data;
          this.serviceSTService.getAllServiceComplement().subscribe(
            data2 => {
              this.services2 = data2;
            }
          );

          this.services.append(this.services1);
        }
      );
    }

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
