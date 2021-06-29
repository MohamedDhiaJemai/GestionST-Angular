import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Gratuite } from 'app/model/Gratuite.model';
import { Joueur } from 'app/model/Joueur.model';
import { JoueurAcamedie } from 'app/model/JoueurAcamedie.model';
import { Obligation } from 'app/model/Obligation.model';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';
import { GratuiteService } from 'app/services/gratuite/gratuite.service';
import { JoueurAcademieService } from 'app/services/joueur-academie/joueur-academie.service';
import { ObligationService } from 'app/services/obligation/obligation.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-consulter-joueur-academie',
  templateUrl: './consulter-joueur-academie.component.html',
  styleUrls: ['./consulter-joueur-academie.component.css']
})
export class ConsulterJoueurAcademieComponent implements OnInit {
  joueurAcademie: JoueurAcamedie;
  urlPhoto: string;
  inputValue: string;
  noDeletion = true;
  id: number;
  url: true;
  gratuite: Gratuite;
  edition: boolean;
  consultation: boolean;
  consultationGratuite: boolean;
  obligationTenu: Obligation;
  obligationInscri: Obligation;
  annee: string;

  constructor(private joueurAcademieService: JoueurAcademieService, private gratuiteService: GratuiteService,
    private obligationService: ObligationService, private routerNav: Router,
    private activatedRoute: ActivatedRoute, private autorisationService: AutorisationService) { }
  ngOnInit() {
    const obj = this.autorisationService.checkAutorisations2('joueur-acamedie', 'gratuite-joueur');
    this.edition = obj.edition;
    this.consultation = obj.consultation;
    this.consultationGratuite = obj.consultationSup;
    this.id = this.activatedRoute.snapshot.params['id'];
    this.urlPhoto = environment.apiUrl + 'photo/get/' + this.id;
    this.annee = new Date().getFullYear().toString();
    this.joueurAcademieService.findById(this.id).subscribe(
      data => {
        this.joueurAcademie = data;
        this.obligationService.tenu(this.id, this.annee).subscribe(dataa => {
          this.obligationTenu = dataa;
        });
        this.obligationService.inscri(this.id, this.annee).subscribe(dataa => {
          this.obligationInscri = dataa;
        });
      }
    );
    this.gratuiteService.active(this.id).subscribe(
      data => {
        this.gratuite = data;
      }
    );
  }

  createTenu() {
    let joueur: Joueur = new Joueur();
    joueur.id = this.id;
    let obligation = new Obligation();
    obligation.annee = this.annee;
    obligation.joueur = joueur;
    obligation.type = 'TENU';
    this.obligationService.add(obligation).subscribe(data =>
      this.obligationTenu = data);
  }
  createInscri() {
    let joueur: Joueur = new Joueur();
    joueur.id = this.id;
    let obligation = new Obligation();
    obligation.annee = this.annee;
    obligation.joueur = joueur;
    obligation.type = 'INSCRIPTION';
    this.obligationService.add(obligation).subscribe(data =>
      this.obligationInscri = data);
  }

  delete(id: number) {
    this.joueurAcademieService.delete(id).subscribe(
      data => {
        this.routerNav.navigate(['/joueur-acamedie']);
      }, err => {
        console.log(err);
        alert('Impossible de supprimer ce joueur!');
      }
    );
  }

  // deleteTenu() {

  // }
  // deleteInscri() {

  // }
}
