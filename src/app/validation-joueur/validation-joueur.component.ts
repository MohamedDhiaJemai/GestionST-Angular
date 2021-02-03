import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { JoueurAcamedie } from 'app/model/JoueurAcamedie.model';
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

  constructor(private joueurAcademieService: JoueurAcademieService, private router: Router) { }

  ngOnInit() {
    this.checkAutorisations();

    this.joueurAcademieService.getAlljAcademieNonValider().subscribe(
      data => {
        this.joueurAcademies = data;
        console.log(this.joueurAcademies)
      }
    );
  }

  checkAutorisations() {
    const autorisations: Array<any> = JSON.parse(localStorage.getItem('autorisations'));

        const roless: Array<any> = JSON.parse(localStorage.getItem('roles'));
    this.edition = false;
    this.consultation = false;
    if (roless.includes('ADMIN')) {
      this.edition = true;
      this.consultation = true;
    } else {
      autorisations.forEach(element => {
        if (element.metier === 'articles') {
          if (!element.consultation) {
            this.router.navigateByUrl('/acceuil');
          }
          this.edition = element.edition;
          this.consultation = element.consultation;
        }
      });
    }
  }
}
