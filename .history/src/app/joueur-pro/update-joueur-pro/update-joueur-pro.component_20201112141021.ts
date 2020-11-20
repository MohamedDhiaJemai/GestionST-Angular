import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-joueur-pro',
  templateUrl: './update-joueur-pro.component.html',
  styleUrls: ['./update-joueur-pro.component.css']
})
export class UpdateJoueurProComponent implements OnInit {

  constructor(private joueurProService: JoueurProService, private categorieService: CategorieService,
    private router: Router, ) { }

  ngOnInit(){
  }

}
