import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceAutre } from 'app/model/ServiceAutre.model';
import { ServiceComplementaire } from 'app/model/ServiceComplementaire.model';
import { ServicePrincipal } from 'app/model/ServicePrincipal.model';
import { ServiceSTService } from 'app/services/serviceST/service-st.service';

@Component({
  selector: 'app-consulter-service',
  templateUrl: './consulter-service.component.html',
  styleUrls: ['./consulter-service.component.css']
})
export class ConsulterServiceComponent implements OnInit {

  servicePrincipal: ServicePrincipal = new ServicePrincipal();
  serviceComplementaire: ServiceComplementaire = new ServiceComplementaire();
  serviceAutre: ServiceAutre = new ServiceAutre();
  urlphotoServiceST: string;
  typeService: string;

  constructor(private router: ActivatedRoute, private serviceSTService: ServiceSTService) { }

  ngOnInit() {
    const id = this.router.snapshot.params['id'];
    this.urlphotoServiceST = 'http://127.0.0.1:8443/image/get/' + id;

    this.serviceSTService.findById(id).subscribe(
      data => {
        if (data === null) {
          this.serviceSTService.findByIdComplement(id).subscribe(
            (dataComp: ServiceComplementaire) => {
              if (dataComp === null) {
                this.serviceSTService.findByIdAutre(id).subscribe(
                  (dataTest: ServiceAutre) => {
                    console.log(dataTest)
                    this.typeService = 'autre';
                    this.serviceAutre = dataTest;
                  }
                );
              } else {
                console.log(dataComp)
                this.typeService = 'complementaire';
                this.serviceComplementaire = dataComp;
                console.log('complementaire')
              }
            }
          );
          console.log('complementaire')
        } else {
          this.typeService = 'principal';
          this.servicePrincipal = data;
          console.log(this.servicePrincipal)
        }
      }
    );
  }


}
