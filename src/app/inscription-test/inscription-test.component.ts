import { Component, OnInit, ViewChild } from '@angular/core';
import { InscriptionTest } from 'app/model/InscriptionTest.model';
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

  @ViewChild('dt') table: Table;
  constructor(private inscriptionTestService: InscriptionTestService) { }

  ngOnInit(): void {
    this.inscriptionTestService.getAll().subscribe(
      data => {
        this.inscriptions = data;
        console.log(this.inscriptions);
      }
    );
  }

}
