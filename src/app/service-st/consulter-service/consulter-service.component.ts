import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceAutre } from 'app/model/ServiceAutre.model';
import { ServiceComplementaire } from 'app/model/ServiceComplementaire.model';
import { ServicePrincipal } from 'app/model/ServicePrincipal.model';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';
import { ServiceSTService } from 'app/services/serviceST/service-st.service';
import { environment } from 'environments/environment';

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
  edition: boolean;
  consultation: boolean;
  constructor(private router: ActivatedRoute, private serviceSTService: ServiceSTService,
    private autorisationService: AutorisationService, private routerNav: Router) { }

  ngOnInit() {
    const obj = this.autorisationService.checkAutorisations1('services');
    this.edition = obj.edition;
    this.consultation = obj.consultation;
    const id = this.router.snapshot.params['id'];
    this.urlphotoServiceST = environment.apiUrl + 'image/get/' + id;

    this.serviceSTService.findById(id).subscribe(
      data => {
        if (data === null) {
          this.serviceSTService.findByIdComplement(id).subscribe(
            (dataComp: ServiceComplementaire) => {
              if (dataComp === null) {
                this.serviceSTService.findByIdAutre(id).subscribe(
                  (dataTest: ServiceAutre) => {
                    this.typeService = 'autre';
                    this.serviceAutre = dataTest;
                  }
                );
              } else {
                this.typeService = 'complementaire';
                this.serviceComplementaire = dataComp;
              }
            }
          );
        } else {
          this.typeService = 'principal';
          this.servicePrincipal = data;
        }
      }
    );
  }

  deletePrincipal(id: number) {
    this.serviceSTService.deletePrincipal(id).subscribe(
      data => {
        this.routerNav.navigate(['/services']);
      }, err => {
        console.log(err);
        alert('Impossible de supprimer ce service!');
      }
    );
  }
  deleteComplementaire(id: number) {
    this.serviceSTService.deleteComplementaire(id).subscribe(
      data => {
        this.routerNav.navigate(['/services']);
      }, err => {
        console.log(err);
        alert('Impossible de supprimer ce service!');
      }
    );
  }

}
