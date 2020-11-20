import { Component, OnInit } from '@angular/core';

export enum sexe {
  FILLE = 'FILLE',
  GARCON = 'GARCON'
}

@Component({
  selector: 'app-add-joueur-academie',
  templateUrl: './add-joueur-academie.component.html',
  styleUrls: ['./add-joueur-academie.component.css']
})
export class AddJoueurAcademieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
