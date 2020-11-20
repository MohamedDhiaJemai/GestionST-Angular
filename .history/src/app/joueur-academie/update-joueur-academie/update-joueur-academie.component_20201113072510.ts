import { Component, OnInit } from '@angular/core';


export enum sexe {
  FILLE = 'FILLE',
  GARCON = 'GARCON'
}

@Component({
  selector: 'app-update-joueur-academie',
  templateUrl: './update-joueur-academie.component.html',
  styleUrls: ['./update-joueur-academie.component.css']
})
export class UpdateJoueurAcademieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
