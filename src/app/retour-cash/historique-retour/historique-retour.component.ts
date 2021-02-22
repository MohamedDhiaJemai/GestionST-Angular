import { Component, OnInit } from '@angular/core';
import { RetourCash } from 'app/model/RetourCash.model';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';
import { RetourCashService } from 'app/services/retour-cash/retour-cash.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-historique-retour',
  templateUrl: './historique-retour.component.html',
  styleUrls: ['./historique-retour.component.scss']
})
export class HistoriqueRetourComponent implements OnInit {
  retours: RetourCash[];
  edition: boolean;
  consultation: boolean;
  constructor(private retourCashService: RetourCashService, private autorisationService: AutorisationService) { }
  ngOnInit(): void {
    const obj = this.autorisationService.checkAutorisations1('historique-retour');
    this.edition = obj.edition;
    this.consultation = obj.consultation;
    this.retourCashService.getAll().subscribe(data =>
      this.retours = data);
  }
  clear(table: Table) {
    table.clear();
  }
}
