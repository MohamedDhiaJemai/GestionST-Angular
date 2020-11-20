import { Component, OnInit, ViewChild } from '@angular/core';
import { JoueurAcamedie } from 'app/model/JoueurAcamedie.model';
import { JoueurAcademieService } from 'app/services/joueur-academie/joueur-academie.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-validation-joueur-academie',
  templateUrl: './validation-joueur-academie.component.html',
  styleUrls: ['./validation-joueur-academie.component.css']
})
export class ValidationJoueurAcademieComponent implements OnInit {

  joueurAcademie: JoueurAcamedie = new JoueurAcamedie();
  selectedJoueurAcademie: JoueurAcamedie;

  @ViewChild('dt') table: Table;

  constructor(private joueurAcademieService: JoueurAcademieService) { }

  ngOnInit() {
    this.joueurAcademieService.getAlljAcademieNonValider().subscribe(
      data => {
        this.joueurAcademie = data;
      }
    );
  }

}
