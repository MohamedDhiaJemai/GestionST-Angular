import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'app/model/Categorie.model';
import { CategorieService } from 'app/services/categorie/categorie.service';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {

  categorie: Categorie = new Categorie();


  constructor(private categorieService: CategorieService, private router: Router) { }

  ngOnInit(): void {
  }

  onAddCategorie() {
    this.categorieService.addcategorie(this.categorie).subscribe(
      data => this.router.navigate(['role-list']),
      error => console.log(error)
      );
  }

}
