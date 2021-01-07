import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceST } from 'app/model/ServiceST.Model';
import { ServiceSTT } from 'app/model/ServiceSTT.model';
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
          console.log(data)
          this.services = data;
        }
      );

    } else if (this.someInput === 'complementaire') {
      this.serviceSTService.getAllServiceComplement().subscribe(
        data => {
          console.log('complementaire')
          console.log(data)
          this.services = data;
        }
      );

    } else if (this.someInput === 'test') {
      this.serviceSTService.getAllServiceTest().subscribe(
        data => {
          console.log('test')
          console.log(data)
          this.services = data;
        }
      );
    } else {
      this.serviceSTService.getAllService().subscribe(
        data => {
          this.serviceSTService.getAllServiceComplement().subscribe(
            data2 => {
              this.serviceSTService.getAllServiceTest().subscribe(
                data3 => {
                  data2.forEach(element => {
                    data.push(element)
                  });
                  data3.forEach(element2 => {
                    data.push(element2)
                  });
                  console.log('others')
                  console.log(data)
                  this.services = data;
                }
              );
            }
          );
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
