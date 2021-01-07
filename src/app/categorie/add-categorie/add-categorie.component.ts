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
  annees: any[] = [];

  constructor(private categorieService: CategorieService, private router: Router) { }

  ngOnInit(): void {
    const now = new Date();
    const year = now.getFullYear();
    let i: number;
    for (i = 4; i < 45; i++) {
      const natif = year - i;
      this.annees.push({ label: natif.toString(), value: natif.toString() })
    }
  }

  onAddCategorie() {
    this.categorieService.addCategorie(this.categorie).subscribe(
      data => this.router.navigate(['categorie-list']),
      error => console.log(error)
      );
  }

}
