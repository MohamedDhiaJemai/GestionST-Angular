import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Gratuite } from 'app/model/Gratuite.model';
import { JoueurAcamedie } from 'app/model/JoueurAcamedie.model';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';
import { GratuiteService } from 'app/services/gratuite/gratuite.service';
import { JoueurAcademieService } from 'app/services/joueur-academie/joueur-academie.service';

@Component({
  selector: 'app-gratuite',
  templateUrl: './gratuite.component.html',
  styleUrls: ['./gratuite.component.css']
})
export class GratuiteComponent implements OnInit {
  id: number;
  gratuites: Gratuite[];
  gratuite: Gratuite;
  gratuiteDialog: boolean;
  dateD: Date;
  dateF: Date;
  joueur: JoueurAcamedie;
  edition: boolean;
  consultation: boolean;
  constructor(private gratuiteService: GratuiteService, private joueurAcademieService: JoueurAcademieService,
    private datePipe: DatePipe, private activatedRoute: ActivatedRoute, private autorisationService: AutorisationService) { }
  ngOnInit(): void {
    const obj = this.autorisationService.checkAutorisations1('gratuite-joueur');
    this.edition = obj.edition;
    this.consultation = obj.consultation;
    this.id = this.activatedRoute.snapshot.params['id'];
    this.gratuiteService.findByJoueur(this.id).subscribe(
      data => {
        this.gratuites = data;
      }
    );
    this.joueurAcademieService.findById(this.id).subscribe(
      data => {
        this.joueur = data;
      }
    );
  }
  openNew() {
    this.gratuite = new Gratuite();
    this.gratuite.joueur = this.joueur;
    this.gratuite.activation = true;
    this.gratuiteDialog = true;
  }
  edit(gratuitee: Gratuite) {
    this.gratuite = { ...gratuitee };
    this.dateD = new Date(this.gratuite.moisDebut);
    this.dateF = new Date(this.gratuite.moisFin);
    this.gratuiteDialog = true;
  }
  hideDialog() {
    this.gratuiteDialog = false;
  }
  editActivation(gratuitee: Gratuite) {
    gratuitee.activation = !gratuitee.activation;
    this.gratuiteService.update(gratuitee.id, gratuitee).subscribe(data => {
      this.gratuiteService.findByJoueur(this.id).subscribe(
        dataa => {
          this.gratuites = dataa;
        }
      );
      this.gratuiteDialog = false;
    }, err => {
      gratuitee.activation = !gratuitee.activation;
    });
  }
  save() {
    this.gratuite.moisDebut = this.datePipe.transform(this.dateD, 'yyyy-MM-dd');
    this.gratuite.moisFin = this.datePipe.transform(this.dateF, 'yyyy-MM-dd');
    if (this.gratuite.id == null) {
      this.gratuiteService.add(this.gratuite).subscribe(data => {
        this.gratuiteService.findByJoueur(this.id).subscribe(
          dataa => {
            this.gratuites = dataa;
          }
        );
        this.gratuiteDialog = false;
      });
    } else {
      this.gratuiteService.update(this.gratuite.id, this.gratuite).subscribe(data => {
        this.gratuiteService.findByJoueur(this.id).subscribe(
          dataa => {
            this.gratuites = dataa;
          }
        );
        this.gratuiteDialog = false;
      });
    }
  }
}
