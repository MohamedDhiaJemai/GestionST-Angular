import { Component, OnInit } from '@angular/core';
import { JoueurPro } from 'app/model/JoueurPro.model';
import { CategorieService } from 'app/services/categorie/categorie.service';
import { JoueurProService } from 'app/services/joueur-pro/joueur-pro.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-add-joueur-pro',
  templateUrl: './add-joueur-pro.component.html',
  styleUrls: ['./add-joueur-pro.component.css']
})
export class AddJoueurProComponent implements OnInit {

  joueurPro: JoueurPro = new JoueurPro();
  item: string;
  items: SelectItem[];


  constructor(private joueurProService:  JoueurProService, private categorieService: CategorieService ) { }

  ngOnInit() {

    this.categorieService.getAllCategorie().subscribe(
      data => {
        this.items = data;
      }
    );
    this.selectedRole = [];
  }

}
