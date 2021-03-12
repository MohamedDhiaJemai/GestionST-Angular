import { Component, OnInit } from '@angular/core';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';

@Component({
  selector: 'app-joueur-test',
  templateUrl: './joueur-test.component.html',
  styleUrls: ['./joueur-test.component.css']
})
export class JoueurTestComponent implements OnInit {

  edition: boolean;
  consultation: boolean;
  constructor(private autorisationService: AutorisationService) { }
  ngOnInit() {
    const obj = this.autorisationService.checkAutorisations1('joueurs-test');
    this.edition = obj.edition;
    this.consultation = obj.consultation;
  }

}
