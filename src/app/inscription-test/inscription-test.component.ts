import { Component, OnInit, ViewChild } from '@angular/core';
import { InscriptionTest } from 'app/model/InscriptionTest.model';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';
import { InscriptionTestService } from 'app/services/inscription-test/inscription-test.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-inscription-test',
  templateUrl: './inscription-test.component.html',
  styleUrls: ['./inscription-test.component.css']
})
export class InscriptionTestComponent implements OnInit {
  inscriptions: InscriptionTest[];
  selectedInscription: InscriptionTest;
  edition: boolean;
  consultation: boolean;
  @ViewChild('dt') table: Table;
  constructor(private inscriptionTestService: InscriptionTestService, private autorisationService: AutorisationService) { }
  ngOnInit() {
    const obj = this.autorisationService.checkAutorisations1('inscriptions-test');
    this.edition = obj.edition;
    this.consultation = obj.consultation;
    this.inscriptionTestService.nonValide().subscribe(
      data => {
        this.inscriptions = data;
      }
    );
  }
  clear(table: Table) {
    table.clear();
  }
}
