import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JoueurPro } from 'app/model/JoueurPro.model';
import { JoueurProService } from 'app/services/joueur-pro/joueur-pro.service';

@Component({
  selector: 'app-consulter-joueur-pro',
  templateUrl: './consulter-joueur-pro.component.html',
  styleUrls: ['./consulter-joueur-pro.component.css']
})
export class ConsulterJoueurProComponent implements OnInit {

  joueurPro: JoueurPro;

  urlPhoto: string;

  id: number;
  edition: boolean;
  consultation: boolean;
  constructor(private joueurProService: JoueurProService, private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.checkAutorisations();

    this.id = this.activatedRoute.snapshot.params['id'];
    this.urlPhoto = 'http://127.0.0.1:8443/photo/get/' + this.id;
    this.joueurProService.findById(this.id).subscribe(
      data => {
        this.joueurPro = data;
        console.log(this.joueurPro)
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
