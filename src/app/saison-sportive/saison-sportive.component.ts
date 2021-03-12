import { Component, OnInit, ViewChild } from '@angular/core';
import { SaisonSportive } from 'app/model/SaisonSportive.model';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';
import { SaisonSportiveService } from 'app/services/saison-sportive/saison-sportive.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-saison-sportive',
  templateUrl: './saison-sportive.component.html',
  styleUrls: ['./saison-sportive.component.css']
})
export class SaisonSportiveComponent implements OnInit {

  saisons: SaisonSportive[];
  selectedSaison: SaisonSportive;
  edition: boolean;
  consultation: boolean;
  @ViewChild('dt') table: Table;
  constructor(private saisonSportiveService: SaisonSportiveService, private autorisationService: AutorisationService) { }
  ngOnInit() {
    const obj = this.autorisationService.checkAutorisations1('saisons');
    this.edition = obj.edition;
    this.consultation = obj.consultation;
    this.saisonSportiveService.getAll().subscribe(
      data => {
        this.saisons = data;
      }
    );
  }

}
