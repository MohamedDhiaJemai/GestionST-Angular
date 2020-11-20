import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieService } from 'app/services/categorie/categorie.service';
import { JoueurProService } from 'app/services/joueur-pro/joueur-pro.service';

@Component({
  selector: 'app-update-joueur-pro',
  templateUrl: './update-joueur-pro.component.html',
  styleUrls: ['./update-joueur-pro.component.css']
})
export class UpdateJoueurProComponent implements OnInit {

  constructor(private joueurProService: JoueurProService, private categorieService: CategorieService,
    private router: Router ) { }

  ngOnInit(){
  }

}
