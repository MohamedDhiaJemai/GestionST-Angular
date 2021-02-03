import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JoueurAcamedie } from 'app/model/JoueurAcamedie.model';
import { JoueurAcademieService } from 'app/services/joueur-academie/joueur-academie.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-joueur-academie',
  templateUrl: './joueur-academie.component.html',
  styleUrls: ['./joueur-academie.component.scss']
})
export class JoueurAcademieComponent implements OnInit {

  edition: boolean;
  consultation: boolean;
  constructor(private router: Router) { }

  ngOnInit() {
    this.checkAutorisations();

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
        if (element.metier === 'joueur-acamedie') {
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
