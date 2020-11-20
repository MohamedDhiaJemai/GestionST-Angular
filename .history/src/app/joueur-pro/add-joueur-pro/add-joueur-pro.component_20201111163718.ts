import { Component, OnInit } from '@angular/core';
import { JoueurPro } from 'app/model/JoueurPro.model';
import { JoueurProService } from 'app/services/joueur-pro/joueur-pro.service';

@Component({
  selector: 'app-add-joueur-pro',
  templateUrl: './add-joueur-pro.component.html',
  styleUrls: ['./add-joueur-pro.component.css']
})
export class AddJoueurProComponent implements OnInit {

  joueurPro: JoueurPro = new JoueurPro();


  constructor(private joueurProService:  JoueurProService, private ) { }

  ngOnInit(): void {
  }

}
