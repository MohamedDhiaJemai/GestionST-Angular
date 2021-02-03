import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Gratuite } from 'app/model/Gratuite.model';
import { JoueurAcamedie } from 'app/model/JoueurAcamedie.model';
import { GratuiteService } from 'app/services/gratuite/gratuite.service';
import { JoueurAcademieService } from 'app/services/joueur-academie/joueur-academie.service';
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

  constructor(private joueurAcademieService: JoueurAcademieService,
    private gratuiteService: GratuiteService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.checkAutorisations();

    this.id = this.activatedRoute.snapshot.params['id'];
    this.urlPhoto = 'http://127.0.0.1:8443/photo/get/' + this.id;

    this.joueurAcademieService.findById(this.id).subscribe(
      data => {
        this.joueurAcademie = data;
        console.log(this.joueurAcademie)
      }
    );

    this.gratuiteService.active(this.id).subscribe(
      data => {
        this.gratuite = data;
        console.log(this.gratuite)
      }
    );
  }

  checkAutorisations() {
    const autorisations: Array<any> = JSON.parse(localStorage.getItem('autorisations'));

    const roless: Array<any> = JSON.parse(localStorage.getItem('roles'));
    this.edition = false;
    this.consultation = false;
    this.consultationGratuite = false;
    if (roless.includes('ADMIN')) {
      this.edition = true;
      this.consultation = true;
      this.consultationGratuite = true;
    } else {
      this.consultationGratuite = false;
      autorisations.forEach(element => {
        if (element.metier === 'joueur-acamedie') {
          if (!element.consultation) {
            this.router.navigateByUrl('/acceuil');
          }
          this.edition = element.edition;
          this.consultation = element.consultation;
        }
        if (element.metier === 'gratuite-joueur') {
          this.consultationGratuite = element.consultation;
        }
      });
    }
  }
}
