import { Component, OnInit } from '@angular/core';
import { JoueurPro } from 'app/model/JoueurPro.model';
import { JoueurProService } from 'app/services/joueur-pro/joueur-pro.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-joueur-pro',
  templateUrl: './joueur-pro.component.html',
  styleUrls: ['./joueur-pro.component.scss']
})

export class JoueurProComponent implements OnInit {

  constructor(){}

  ngOnInit(){
    
  }
}
