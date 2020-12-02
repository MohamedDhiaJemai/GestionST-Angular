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

  constructor(private router: ActivatedRoute, private serviceSTService: ServiceSTService) { }

  ngOnInit() {
    const id = this.router.snapshot.params['id'];
    this.urlphotoServiceST = 'http://192.168.0.143:8443/image/get/' + id;

    this.serviceSTService.findById(id).subscribe(
      data => {
        if (data === null) {
          console.log('complementaire')
        } else {
          this.serviceST = data;
          console.log(this.serviceST)
        }

      }
    );
  }


}
