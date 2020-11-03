import { Component, OnInit } from '@angular/core';
import { Categorie } from 'app/model/Categorie.model';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {

  role: Categorie = new Categorie();


  constructor() { }

  ngOnInit(): void {
  }

}
