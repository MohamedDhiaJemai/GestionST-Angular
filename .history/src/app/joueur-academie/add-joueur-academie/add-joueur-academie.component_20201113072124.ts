import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JoueurAcamedie } from 'app/model/JoueurAcamedie.model';
import { CategorieService } from 'app/services/categorie/categorie.service';
import { JoueurAcademieService } from 'app/services/joueur-academie/joueur-academie.service';
import { SelectItem } from 'primeng/api';

export enum sexe {
  FILLE = 'FILLE',
  GARCON = 'GARCON'
}

@Component({
  selector: 'app-add-joueur-academie',
  templateUrl: './add-joueur-academie.component.html',
  styleUrls: ['./add-joueur-academie.component.css']
})
export class AddJoueurAcademieComponent implements OnInit {

  joueurAcamedie: JoueurAcamedie = new JoueurAcamedie();
  sexes: SelectItem[];

  itemsCategories: SelectItem[];
  item: string;

  constructor(private joueurAcaService: JoueurAcademieService,
    private categorieService: CategorieService,
    private router: Router, private datePipe: DatePipe) {
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

  onAddJoueurAca() {
    this.joueurAcamedie.dateNaissance = this.datePipe.transform(this.joueurAcamedie.dateNaissance, 'yyyy-MM-dd');
    console.log('Professionnel', this.joueurPro)
    this.joueurProService.addjProfessionnel(this.joueurPro).subscribe(
      data => this.router.navigate(['jouteur-professionnel']),
      error => console.log(error)
    );
  }

}
