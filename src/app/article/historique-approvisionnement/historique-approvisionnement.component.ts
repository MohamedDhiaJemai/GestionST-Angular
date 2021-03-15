import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Approvisonnement } from 'app/model/Approvisonnement.model';
import { ApprovisionnementService } from 'app/services/approvisonnement/approvisionnement.service';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-historique-approvisionnement',
  templateUrl: './historique-approvisionnement.component.html',
  styleUrls: ['./historique-approvisionnement.component.css']
})
export class HistoriqueApprovisionnementComponent implements OnInit {
  approvisionnements: Approvisonnement[];
  id: any;
  constructor(private approvisionnementService: ApprovisionnementService, private activatedRoute: ActivatedRoute,
    private autorisationService: AutorisationService) { }

  ngOnInit(): void {
    const obj = this.autorisationService.checkAutorisations1('approvisionnement');
    this.id = this.activatedRoute.snapshot.params['id'];
    this.approvisionnementService.findByArticle(this.id).subscribe(data => this.approvisionnements = data);
  }
  clear(table: Table) {
    table.clear();
  }
}
