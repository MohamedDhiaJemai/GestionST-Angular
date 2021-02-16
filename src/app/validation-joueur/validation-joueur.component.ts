import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { JoueurAcamedie } from 'app/model/JoueurAcamedie.model';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';
import { JoueurAcademieService } from 'app/services/joueur-academie/joueur-academie.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-validation-joueur',
  templateUrl: './validation-joueur.component.html',
  styleUrls: ['./validation-joueur.component.css']
})
export class ValidationJoueurComponent implements OnInit {
  joueurAcademies: JoueurAcamedie[];
  selectedJoueurAcademie: JoueurAcamedie;
  edition: boolean;
  consultation: boolean;
  @ViewChild('dt') table: Table;
  constructor(private joueurAcademieService: JoueurAcademieService, private autorisationService: AutorisationService) { }
  ngOnInit() {
    const obj = this.autorisationService.checkAutorisations1('validation-joueur');
    this.edition = obj.edition;
    this.consultation = obj.consultation;
    this.joueurAcademieService.getAlljAcademieNonValider().subscribe(
      data => {
        this.joueurAcademies = data;
      }
    );
  }
}
