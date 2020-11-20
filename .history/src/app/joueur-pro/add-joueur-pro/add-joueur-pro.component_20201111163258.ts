import { Component, OnInit } from '@angular/core';
import { JoueurPro } from 'app/model/JoueurPro.model';

@Component({
  selector: 'app-add-joueur-pro',
  templateUrl: './add-joueur-pro.component.html',
  styleUrls: ['./add-joueur-pro.component.css']
})
export class AddJoueurProComponent implements OnInit {

  joueurPro: JoueurPro = new JoueurPro();


  constructor() { }

  ngOnInit(): void {
  }

}
