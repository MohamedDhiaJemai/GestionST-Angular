import { Component, OnInit } from '@angular/core';
import { Categorie } from 'app/model/Categorie.model';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  roles: Categorie[];
  selectedRole: Categorie;
  
  @ViewChild('dt') table: Table;

  constructor() { }

  ngOnInit(): void {
  }

}
