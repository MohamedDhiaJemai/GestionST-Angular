import { Component, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild('dt') table: Table;

  constructor(private joueurAcademieService: JoueurAcademieService) { }

  ngOnInit() {
    this.joueurAcademieService.getAlljAcademieNonValider().subscribe(
      data => {
        this.joueurAcademies = data;
        console.log(this.joueurAcademies)
      }
    );
  }

}
