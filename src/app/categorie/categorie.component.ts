import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'app/model/Categorie.model';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';
import { CategorieService } from 'app/services/categorie/categorie.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  categories: Categorie[];
  selectedCategorie: Categorie;
  edition: boolean;
  consultation: boolean;
  @ViewChild('dt') table: Table;
  constructor(private categorieService: CategorieService, private autorisationService: AutorisationService) { }
  ngOnInit() {
    const obj = this.autorisationService.checkAutorisations1('categories');
    this.edition = obj.edition;
    this.consultation = obj.consultation;
    this.categorieService.getAllCategorie().subscribe(
      data => {
        this.categories = data;
      }
    );
  }
}
