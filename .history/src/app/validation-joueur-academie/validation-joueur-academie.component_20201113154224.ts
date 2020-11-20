import { Component, OnInit } from '@angular/core';
import { JoueurAcamedie } from 'app/model/JoueurAcamedie.model';

@Component({
  selector: 'app-validation-joueur-academie',
  templateUrl: './validation-joueur-academie.component.html',
  styleUrls: ['./validation-joueur-academie.component.css']
})
export class ValidationJoueurAcademieComponent implements OnInit {

  joueurAcademie: JoueurAcamedie = new JoueurAcamedie();
  selectedJoueurAcademie: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
