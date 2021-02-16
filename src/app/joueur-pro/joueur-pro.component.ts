import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JoueurPro } from 'app/model/JoueurPro.model';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';
import { JoueurProService } from 'app/services/joueur-pro/joueur-pro.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-joueur-pro',
  templateUrl: './joueur-pro.component.html',
  styleUrls: ['./joueur-pro.component.css']
})
export class JoueurProComponent implements OnInit {
  edition: boolean;
  consultation: boolean;
  constructor(private autorisationService: AutorisationService) { }
  ngOnInit() {
    const obj = this.autorisationService.checkAutorisations1('joueur-professionnel');
    this.edition = obj.edition;
    this.consultation = obj.consultation;
  }
}
