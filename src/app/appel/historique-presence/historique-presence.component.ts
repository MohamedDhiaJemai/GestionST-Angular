import { Component, OnInit } from '@angular/core';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';

@Component({
  selector: 'app-historique-presence',
  templateUrl: './historique-presence.component.html',
  styleUrls: ['./historique-presence.component.css']
})
export class HistoriquePresenceComponent implements OnInit {

  edition: boolean;
  consultation: boolean;
  constructor(private autorisationService: AutorisationService) { }
  ngOnInit(): void {
    const obj = this.autorisationService.checkAutorisations1('historique-presence');
    this.edition = obj.edition;
    this.consultation = obj.consultation;
  }
}
