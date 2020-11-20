import { Component, OnInit } from '@angular/core';
import { JoueurAcamedie } from 'app/model/JoueurAcamedie.model';

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

  joueurAcamedie: JoueurAcamedie = new JoueurAcamedie();
  sexes: SelectItem[];

  itemsCategories: SelectItem[];
  item: string;

  constructor() { }

  ngOnInit(): void {
  }

}
