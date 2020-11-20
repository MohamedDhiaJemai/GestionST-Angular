import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JoueurPro } from 'app/model/JoueurPro.model';
import { CategorieService } from 'app/services/categorie/categorie.service';
import { JoueurProService } from 'app/services/joueur-pro/joueur-pro.service';
import { SelectItem } from 'primeng/api';

export enum sexe {
  FILLE = 'FILLE',
  GARCON = 'GARCON'
}

@Component({
  selector: 'app-update-joueur-pro',
  templateUrl: './update-joueur-pro.component.html',
  styleUrls: ['./update-joueur-pro.component.css']
})
export class UpdateJoueurProComponent implements OnInit {

  joueurPro: JoueurPro = new JoueurPro();
  sexes: SelectItem[];

  itemsCategories: SelectItem[];
  item: string;

  constructor(private joueurProService: JoueurProService, private categorieService: CategorieService,
    private router: Router) {
    this.sexes = Object.keys(sexe).map(key => ({ label: sexe[key], value: key }));
  }

  ngOnInit() {

    this.categorieService.getAllCategorie().subscribe(
      data => {
        this.itemsCategories = data;
        console.log(this.itemsCategories);
      }
    );
  }

}
