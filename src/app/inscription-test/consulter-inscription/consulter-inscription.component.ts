import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InscriptionTest } from 'app/model/InscriptionTest.model';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';
import { InscriptionTestService } from 'app/services/inscription-test/inscription-test.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-consulter-inscription',
  templateUrl: './consulter-inscription.component.html',
  styleUrls: ['./consulter-inscription.component.css']
})
export class ConsulterInscriptionComponent implements OnInit {
  inscription: InscriptionTest = new InscriptionTest();
  urlPhoto: string;
  inputValue: string;
  id: number;
  edition: boolean;
  consultation: boolean;
  constructor(private inscriptionTestService: InscriptionTestService, private activatedRoute: ActivatedRoute,
    private autorisationService: AutorisationService) { }
  ngOnInit(): void {
    const obj = this.autorisationService.checkAutorisations1('inscriptions-test');
    this.edition = obj.edition;
    this.consultation = obj.consultation;
    this.id = this.activatedRoute.snapshot.params['id'];
    this.urlPhoto = environment.apiUrl + 'photo-test/get/' + this.id;
    this.inscriptionTestService.findById(this.id).subscribe(
      (data: InscriptionTest) => {
        this.inscription = data;
      }
    );
  }
}
