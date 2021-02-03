import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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
  edition: boolean;
  consultation: boolean;

  @ViewChild('dt') table: Table;
  constructor(private inscriptionTestService: InscriptionTestService, private router: Router) { }

  ngOnInit() {
    this.checkAutorisations();

    this.inscriptionTestService.getAll().subscribe(
      data => {
        this.inscriptions = data;
        console.log(this.inscriptions);
      }
    );
  }

  checkAutorisations() {
    const autorisations: Array<any> = JSON.parse(localStorage.getItem('autorisations'));

        const roless: Array<any> = JSON.parse(localStorage.getItem('roles'));
    this.edition = false;
    this.consultation = false;
    if (roless.includes('ADMIN')) {
      this.edition = true;
      this.consultation = true;
    } else {
      autorisations.forEach(element => {
        if (element.metier === 'inscriptions-test') {
          if (!element.consultation) {
            this.router.navigateByUrl('/acceuil');
          }
          this.edition = element.edition;
          this.consultation = element.consultation;
        }
      });
    }
  }
}
