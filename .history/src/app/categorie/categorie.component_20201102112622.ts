import { Component, OnInit, ViewChild } from '@angular/core';
import { Categorie } from 'app/model/Categorie.model';
import { CategorieService } from 'app/services/categorie/categorie.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  roles: Categorie[];
  selectedRole: Categorie;

  @ViewChild('dt') table: Table;

  constructor(private categorieService: CategorieService) { }

  ngOnInit(): void {
  }

}
