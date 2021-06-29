import { Component, OnInit } from '@angular/core';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';

@Component({
  selector: 'app-joueur-academie',
  templateUrl: './joueur-academie.component.html',
  styleUrls: ['./joueur-academie.component.scss']
})
export class JoueurAcademieComponent implements OnInit {
  edition: boolean;
  consultation: boolean;
  constructor(private autorisationService: AutorisationService) { }
  ngOnInit() {
    const obj = this.autorisationService.checkAutorisations1('joueur-acamedie');
    this.edition = obj.edition;
    this.consultation = obj.consultation;
  }
}
