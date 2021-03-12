import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InscriptionTest } from 'app/model/InscriptionTest.model';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';
import { InscriptionTestService } from 'app/services/inscription-test/inscription-test.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-consulter-joueur-test',
  templateUrl: './consulter-joueur-test.component.html',
  styleUrls: ['./consulter-joueur-test.component.css']
})
export class ConsulterJoueurTestComponent implements OnInit {

  inscription: InscriptionTest = new InscriptionTest();
  urlPhoto: string;
  inputValue: string;
  id: number;
  edition: boolean;
  consultation: boolean;
  constructor(private inscriptionTestService: InscriptionTestService, private activatedRoute: ActivatedRoute,
    private autorisationService: AutorisationService) { }
  ngOnInit(): void {
    const obj = this.autorisationService.checkAutorisations1('joueurs-test');
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
  editPase1(joueur: InscriptionTest) {
    joueur.phase1 = !joueur.phase1;
    this.inscriptionTestService.editerEtat(joueur.id, joueur).subscribe((data: InscriptionTest) => {
      this.inscription = data;
    }, err => {
      joueur.phase1 = !joueur.phase1;
      alert(err.message);
    });
  }
  editPase2(joueur: InscriptionTest) {
    joueur.phase2 = !joueur.phase2;
    this.inscriptionTestService.editerEtat(joueur.id, joueur).subscribe((data: InscriptionTest) => {
      this.inscription = data;
    }, err => {
      joueur.phase2 = !joueur.phase2;
      alert(err.message);
    });
  }

  editRefus(joueur: InscriptionTest) {
    joueur.refus = !joueur.refus;
    this.inscriptionTestService.editerEtat(joueur.id, joueur).subscribe((data: InscriptionTest) => {
      this.inscription = data;
    }, err => {
      joueur.refus = !joueur.refus;
      alert(err.message);
    });
  }
}
