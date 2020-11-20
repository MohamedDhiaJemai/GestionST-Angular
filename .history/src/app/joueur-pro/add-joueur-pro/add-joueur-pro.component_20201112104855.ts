import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JoueurPro } from 'app/model/JoueurPro.model';
import { Sexe } from 'app/model/Sexe.model';
import { CategorieService } from 'app/services/categorie/categorie.service';
import { JoueurProService } from 'app/services/joueur-pro/joueur-pro.service';
import { SelectItem } from 'primeng/api';


export enum sexe {
  Fille = 'Fille',
  Garçon = 'Garçon'
}


@Component({
  selector: 'app-add-joueur-pro',
  templateUrl: './add-joueur-pro.component.html',
  styleUrls: ['./add-joueur-pro.component.scss']
})
export class AddJoueurProComponent implements OnInit {

  joueurPro: JoueurPro = new JoueurPro();
  sexes: SelectItem[];

  itemsCategories: SelectItem[];
  item: string;

  constructor(private joueurProService: JoueurProService, private categorieService: CategorieService,
    private router: Router, private datePipe: DatePipe) {
    // this.sexe = [
    //   { value: 'Fille' },
    //   { value: 'Garçon' }
    // ];

    this.sexes = Object.keys(sexe).map(key => ({ label: sexe[key], value: key }));
  }
  OnChange(ev) {
    console.log(this.joueurPro.sexe)
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
    console.log(this.datePipe.transform(this.joueurPro.dateNaissance,"yyyy-MM-dd")); //output : 2018-02-13
    console.log('Professionnel', this.joueurPro)
    this.joueurProService.addjProfessionnel(this.joueurPro).subscribe(
      data => this.router.navigate(['jouteur-professionnel']),
      error => console.log(error)
    );
  }

}
