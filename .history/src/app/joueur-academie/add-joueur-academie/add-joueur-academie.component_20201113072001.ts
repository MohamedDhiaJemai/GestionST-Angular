import { Component, OnInit } from '@angular/core';
import { JoueurAcamedie } from 'app/model/JoueurAcamedie.model';
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

  constructor(private joueurAcaService: JoueurAcademieService, private categorieService: CategorieService,
    private router: Router, private datePipe: DatePipe) { }

  ngOnInit(): void {
  }

}
