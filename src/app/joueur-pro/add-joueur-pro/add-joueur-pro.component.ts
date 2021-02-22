import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sexe } from 'app/model/Enums.model';
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
  sexes: SelectItem[];

  itemsCategories: SelectItem[];
  item: string;

  constructor(private joueurProService: JoueurProService, private categorieService: CategorieService,
    private router: Router, private datePipe: DatePipe) {
    this.sexes = Object.keys(Sexe).map(key => ({ label: Sexe[key], value: key }));
  }

  ngOnInit() {

    this.categorieService.getAllCategorie().subscribe(
      data => {
        this.itemsCategories = data;
      }
    );
  }

  onAddJoueurPro() {
    this.joueurPro.dateNaissance = this.datePipe.transform(this.joueurPro.dateNaissance, 'yyyy-MM-dd');
    this.joueurProService.addjProfessionnel(this.joueurPro).subscribe(
      data => this.router.navigate(['joueur-professionnel'])
    );
  }

}
