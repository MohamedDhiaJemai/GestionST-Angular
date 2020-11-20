import { Component, OnInit } from '@angular/core';
import { JoueurPro } from 'app/model/JoueurPro.model';
import { CategorieService } from 'app/services/categorie/categorie.service';
import { JoueurProService } from 'app/services/joueur-pro/joueur-pro.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-add-joueur-pro',
  templateUrl: './add-joueur-pro.component.html',
  styleUrls: ['./add-joueur-pro.component.scss']
})
export class AddJoueurProComponent implements OnInit {

  joueurPro: JoueurPro = new JoueurPro();

  sexe: SelectItem[];

  itemsCategories: SelectItem[];
  item: string;


  constructor(private joueurProService: JoueurProService, private categorieService: CategorieService) {
    this.sexe = [
      { label: 'Fille', value: 'Fille' },
      { label: 'Garçon', value: 'Garçon' }
    ];
  }

  ngOnInit() {

    this.categorieService.getAllCategorie().subscribe(
      data => {
        this.itemsCategories = data;
        console.log(this.itemsCategories);
      }
    );
  }

  onAddJoueurPro() {
    this.joueurProService.addjProfessionnel(this.joueurPro).subscribe(
      data => this.router.navigate(['categorie-list']),
      error => console.log(error)
      );
  }

}
