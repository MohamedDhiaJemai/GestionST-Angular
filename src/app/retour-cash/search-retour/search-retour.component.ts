import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RetourCash } from 'app/model/RetourCash.model';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';
import { RetourCashService } from 'app/services/retour-cash/retour-cash.service';

@Component({
  selector: 'app-search-retour',
  templateUrl: './search-retour.component.html',
  styleUrls: ['./search-retour.component.css']
})
export class SearchRetourComponent implements OnInit {
  retourCash: RetourCash;
  exist: boolean;
  idRetour: string;
  edition: boolean;
  consultation: boolean;
  submitted: boolean;
  constructor(private retourCashService: RetourCashService, private autorisationService: AutorisationService) { }
  ngOnInit(): void {
    const obj = this.autorisationService.checkAutorisations1('retour-cash');
    this.edition = obj.edition;
    this.consultation = obj.consultation;
    this.submitted = false;
    document.getElementById('searchField').focus();
    this.exist = false;
    this.idRetour = '';
  }
  findRetour() {
    this.submitted = true;
    this.retourCashService.findById(this.idRetour).subscribe(data => {
      this.retourCash = data;
      this.exist = this.retourCash != null;
    }, err => {
      this.exist = false;
    }
    );
  }
  validerRetour(id: string) {
    this.retourCashService.retour(id).subscribe((data: RetourCash) => this.retourCash = data);
  }
  clear() {
    document.getElementById('searchField').focus();
    this.exist = false;
    this.retourCash = null;
    this.idRetour = '';
  }
}
