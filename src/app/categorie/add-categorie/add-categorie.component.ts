import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'app/model/Categorie.model';
import { SaisonSportive } from 'app/model/SaisonSportive.model';
import { CategorieService } from 'app/services/categorie/categorie.service';
import { SaisonSportiveService } from 'app/services/saison-sportive/saison-sportive.service';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {

  categorie: Categorie = new Categorie();
  annees: any[] = [];
  saisons: SaisonSportive[];
  constructor(private categorieService: CategorieService, private router: Router, private saisonSportiveService: SaisonSportiveService) { }

  ngOnInit(): void {
    const now = new Date();
    const year = now.getFullYear();
    let i: number;
    for (i = 4; i < 45; i++) {
      const natif = year - i;
      this.annees.push({ label: natif.toString(), value: natif.toString() })
    }
    this.saisonSportiveService.getAll().subscribe(
      data => {
        this.saisons = data;
      }
    );
  }

  onAddCategorie() {
    this.categorieService.addCategorie(this.categorie).subscribe(
      data => this.router.navigate(['categories'])
    );
  }

}
