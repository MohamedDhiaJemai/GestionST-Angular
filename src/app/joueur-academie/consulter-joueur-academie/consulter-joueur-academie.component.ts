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

  constructor(private joueurAcademieService: JoueurAcademieService,
    private gratuiteService: GratuiteService,
    private router: ActivatedRoute,
    private routerNav: Router) { }

  ngOnInit() {
    this.id = this.router.snapshot.params['id'];
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

}
