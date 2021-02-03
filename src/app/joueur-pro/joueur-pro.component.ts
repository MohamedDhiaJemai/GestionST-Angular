import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JoueurPro } from 'app/model/JoueurPro.model';
import { JoueurProService } from 'app/services/joueur-pro/joueur-pro.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-joueur-pro',
  templateUrl: './joueur-pro.component.html',
  styleUrls: ['./joueur-pro.component.css']
})

export class JoueurProComponent implements OnInit {
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
        if (element.metier === 'joueur-professionnel') {
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
