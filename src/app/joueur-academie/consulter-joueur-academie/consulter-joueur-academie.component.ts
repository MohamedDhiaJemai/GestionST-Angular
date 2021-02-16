import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Gratuite } from 'app/model/Gratuite.model';
import { JoueurAcamedie } from 'app/model/JoueurAcamedie.model';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';
import { GratuiteService } from 'app/services/gratuite/gratuite.service';
import { JoueurAcademieService } from 'app/services/joueur-academie/joueur-academie.service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

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
  constructor(private joueurAcademieService: JoueurAcademieService, private gratuiteService: GratuiteService,
    private activatedRoute: ActivatedRoute, private autorisationService: AutorisationService) { }
  ngOnInit() {
    const obj = this.autorisationService.checkAutorisations2('joueur-acamedie', 'gratuite-joueur');
    this.edition = obj.edition;
    this.consultation = obj.consultation;
    this.consultationGratuite = obj.consultationSup;
    this.id = this.activatedRoute.snapshot.params['id'];
    this.urlPhoto = environment.apiUrl + 'photo/get/' + this.id;
    this.joueurAcademieService.findById(this.id).subscribe(
      data => {
        this.joueurAcademie = data;
      }
    );
    this.gratuiteService.active(this.id).subscribe(
      data => {
        this.gratuite = data;
      }
    );
  }
}
