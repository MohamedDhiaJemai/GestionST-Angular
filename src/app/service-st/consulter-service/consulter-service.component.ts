import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceST } from 'app/model/ServiceST.Model';
import { ServiceSTC } from 'app/model/ServiceSTC.model';
import { ServiceSTService } from 'app/services/serviceST/service-st.service';

@Component({
  selector: 'app-consulter-service',
  templateUrl: './consulter-service.component.html',
  styleUrls: ['./consulter-service.component.css']
})
export class ConsulterServiceComponent implements OnInit {

  serviceST: ServiceST = new ServiceST();
  serviceSTC: ServiceSTC = new ServiceSTC();
  urlphotoServiceST: string;
  test: boolean;

  constructor(private router: ActivatedRoute, private serviceSTService: ServiceSTService) { }

  ngOnInit() {
    const id = this.router.snapshot.params['id'];
    this.urlphotoServiceST = 'http://localhost:8443/image/get/' + id;

    this.serviceSTService.findById(id).subscribe(
      data => {
        if (data === null) {
          this.serviceSTService.findByIdComplement(id).subscribe(
            (datac: ServiceSTC) => {
              console.log(datac)
              this.test = true;
              this.serviceSTC = datac;
            }
          );
          console.log('complementaire')
        } else {
          this.test = false;
          this.serviceST = data;
          console.log(this.serviceST)
        }

      }
    );
  }


}