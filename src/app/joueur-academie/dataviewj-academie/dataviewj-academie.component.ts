import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Sexe } from 'app/model/Enums.model';
import { JAcademieSearch } from 'app/model/JAcademieSearch.model';
import { JoueurAcamedie } from 'app/model/JoueurAcamedie.model';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';
import { JoueurAcademieService } from 'app/services/joueur-academie/joueur-academie.service';
import { environment } from 'environments/environment';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-dataviewj-academie',
  templateUrl: './dataviewj-academie.component.html',
  styleUrls: ['./dataviewj-academie.component.scss']
})
export class DataviewjAcademieComponent implements OnInit {

  joueurAcads: JoueurAcamedie[];
  sortOptions: SelectItem[];
  sortOrder: number;
  sortField: string;
  sortKey: string;
  photoUrl = environment.apiUrl + 'photo/get/';
  edition: boolean;
  consultation: boolean;

  anneesRange: string;
  annees: any[] = [];
  dd: Date;
  df: Date;
  dn: Date;
  dm: Date;
  sexes: SelectItem[];
  searchParams: JAcademieSearch = new JAcademieSearch();

  gRadio: string;
  tRadio: string;
  iRadio: string;
  eRadio: string;

  constructor(private autorisationService: AutorisationService,
    private joueurAcademieService: JoueurAcademieService, private datePipe: DatePipe) {
    const now = new Date();
    const year = now.getFullYear();
    let i: number;
    for (i = 4; i < 45; i++) {
      const natif = year - i;
      this.annees.push({ label: natif.toString(), value: natif.toString() })
    }
    this.anneesRange = (year - 45).toString() + ':' + year.toString();
    this.sexes = Object.keys(Sexe).map(key => ({ label: Sexe[key], value: key }));
  }

  ngOnInit() {
    const obj = this.autorisationService.checkAutorisations1('joueur-acamedie');
    this.edition = obj.edition;
    this.consultation = obj.consultation;
    this.joueurAcademieService.getAlljAcademie().subscribe(
      data => {
        this.joueurAcads = data;
      }
    );

    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ];

  }
  onSortChange(event) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  reset() {
    this.joueurAcademieService.getAlljAcademie().subscribe(
      data => {
        this.joueurAcads = data;
      }
    );
    this.searchParams = new JAcademieSearch();
    this.dd = undefined;
    this.df = undefined;
    this.dn = undefined;
    this.dm = undefined;
    this.gRadio = undefined;
    this.tRadio = undefined;
    this.iRadio = undefined;
    this.eRadio = undefined;
  }

  findJoueurs() {
    if (this.dd && this.df && this.dd <= this.df) {
      this.searchParams.dateInscriptionDebut = this.datePipe.transform(this.dd, 'yyyy-MM-ddTHH:mm:ss.001');
      this.searchParams.dateInscriptionFin = this.datePipe.transform(this.df, 'yyyy-MM-ddT23:59:59.999');
    }
    if (this.dn) {
      this.searchParams.dateNaissance = this.datePipe.transform(this.dn, 'yyyy-MM-dd');
    }

    if (this.dm) {
      this.searchParams.moisAbonnement = this.datePipe.transform(this.dm, 'MM-yyyy');
    }


    if (this.eRadio) {
      this.searchParams.elite = this.eRadio.includes('true');
    }
    if (this.gRadio) {
      this.searchParams.gratuite = this.gRadio.includes('true');
    }
    if (this.searchParams.anneeObligation) {
      if (this.tRadio) {
        this.searchParams.tenu = this.tRadio.includes('true');
      }
      if (this.iRadio) {
        this.searchParams.inscri = this.iRadio.includes('true');
      }
    }

    if (this.searchParams && Object.keys(this.searchParams).length > 0) {
      // console.log(this.searchParams);
      this.joueurAcademieService.find(this.searchParams).subscribe(data => {
        this.joueurAcads = data;
        // console.log(data);
      });
    }
  }
}
