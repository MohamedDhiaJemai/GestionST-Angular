import { Component, OnInit, ViewChild } from '@angular/core';
import { JoueurAcamedie } from 'app/model/JoueurAcamedie.model';
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

  constructor() { }

  ngOnInit(): void {
  }

}
