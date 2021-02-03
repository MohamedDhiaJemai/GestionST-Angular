import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'app/model/Categorie.model';
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

  constructor(private categorieService: CategorieService, private router: Router) { }

  ngOnInit() {
    this.checkAutorisations();

    this.categorieService.getAllCategorie().subscribe(
      data => {
        this.categories = data;
      }
    );
  }

  checkAutorisations() {
    const autorisations: Array<any> = JSON.parse(localStorage.getItem('autorisations'));

    const roless: Array<any> = JSON.parse(localStorage.getItem('roles'));
    this.edition = false;
    this.consultation = false;
    if (roless.includes('ADMIN')) {
      this.edition = true;
      this.consultation = true;
    } else {
      autorisations.forEach(element => {
        if (element.metier === 'categories') {
          if (!element.consultation) {
            this.router.navigateByUrl('/acceuil');
          }
          this.edition = element.edition;
          this.consultation = element.consultation;
        }
      });
    }
  }
}
