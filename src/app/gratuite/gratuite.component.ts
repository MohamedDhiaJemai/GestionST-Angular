import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gratuite } from 'app/model/Gratuite.model';
import { JoueurAcamedie } from 'app/model/JoueurAcamedie.model';
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

  constructor(private gratuiteService: GratuiteService,
    private joueurAcademieService: JoueurAcademieService,
    private datePipe: DatePipe,
    private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.gratuiteService.findByJoueur(this.id).subscribe(
      data => {
        this.gratuites = data;
        console.log(this.gratuites);
      }
    );
    this.joueurAcademieService.findById(this.id).subscribe(
      data => {
        this.joueur = data;
        console.log(this.joueur);
      }
    );
  }

  openNew() {
    this.gratuite = new Gratuite();
    this.gratuite.joueur = this.joueur;
    this.gratuite.activation = true;
    console.log(this.gratuite);
    this.gratuiteDialog = true;
  }

  edit(gratuitee: Gratuite) {
    this.gratuite = { ...gratuitee };
    console.log(this.gratuite);
    this.dateD = new Date(this.gratuite.moisDebut);
    this.dateF = new Date(this.gratuite.moisFin);
    this.gratuiteDialog = true;
  }

  hideDialog() {
    this.gratuiteDialog = false;
  }

  save() {
    this.gratuite.moisDebut = this.datePipe.transform(this.dateD, 'yyyy-MM-dd');
    this.gratuite.moisFin = this.datePipe.transform(this.dateF, 'yyyy-MM-dd');
    console.log(this.gratuite);
    if (this.gratuite.id == null) {
      this.gratuiteService.add(this.gratuite).subscribe(data => {
        console.log('ok');
        this.gratuiteService.findByJoueur(this.id).subscribe(
          dataa => {
            this.gratuites = dataa;
            console.log(this.gratuites);
          }
        );
        this.gratuiteDialog = false;
      }, err => {
        console.log(err);
      });
    } else {
      this.gratuiteService.update(this.gratuite.id, this.gratuite).subscribe(data => {
        console.log('ok');
        this.gratuiteService.findByJoueur(this.id).subscribe(
          dataa => {
            this.gratuites = dataa;
            console.log(this.gratuites);
          }
        );
        this.gratuiteDialog = false;
      }, err => {
        console.log(err);
      });
    }
  }
}
