import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  sexe: String[];

  itemsCategories: SelectItem[];
  item: string;


  constructor(private joueurProService: JoueurProService, private categorieService: CategorieService,
    private router: Router) {
    // this.sexe = [
    //   { value: 'Fille' },
    //   { value: 'Garçon' }
    // ];

    enum sexe {
      'Fille',
      'Garçon'
    }
    
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
    console.log("Professionnel", this.joueurPro)
    this.joueurProService.addjProfessionnel(this.joueurPro).subscribe(
      data => this.router.navigate(['jouteur-professionnel']),
      error => console.log(error)
    );
  }

}
