import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceST } from 'app/model/ServiceST.Model';
import { ServiceSTC } from 'app/model/ServiceSTC.model';
import { ServiceSTT } from 'app/model/ServiceSTT.model';
import { ServiceSTService } from 'app/services/serviceST/service-st.service';

@Component({
  selector: 'app-consulter-service',
  templateUrl: './consulter-service.component.html',
  styleUrls: ['./consulter-service.component.css']
})
export class ConsulterServiceComponent implements OnInit {

  serviceST: ServiceST = new ServiceST();
  serviceSTC: ServiceSTC = new ServiceSTC();
  serviceSTT: ServiceSTT = new ServiceSTT();
  urlphotoServiceST: string;
  typeService: string;

  constructor(private router: ActivatedRoute, private serviceSTService: ServiceSTService) { }

  ngOnInit() {
    const id = this.router.snapshot.params['id'];
    this.urlphotoServiceST = 'http://localhost:8443/image/get/' + id;

    this.serviceSTService.findById(id).subscribe(
      data => {
        if (data === null) {
          this.serviceSTService.findByIdComplement(id).subscribe(
            (dataComp: ServiceSTC) => {
              if (dataComp === null) {
                this.serviceSTService.findByIdTest(id).subscribe(
                  (dataTest: ServiceSTT) => {
                    console.log(dataTest)
                    this.typeService = 'test';
                    this.serviceSTT = dataTest;
                  }
                );
                console.log('test')
              } else {
                console.log(dataComp)
                this.typeService = 'complementaire';
                this.serviceSTC = dataComp;
                console.log('complementaire')
                console.log(this.serviceST)
              }
            }
          );
          console.log('complementaire')
        } else {
          this.typeService = 'principal';
          this.serviceST = data;
          console.log(this.serviceST)
        }
      }
    );
  }


}
