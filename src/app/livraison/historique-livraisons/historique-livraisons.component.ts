import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Livraison } from 'app/model/Livraison.model';
import { LivraisonSearch } from 'app/model/livraisonSearch.model';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';
import { LivraisonService } from 'app/services/livraison/livraison.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-historique-livraisons',
  templateUrl: './historique-livraisons.component.html',
  styleUrls: ['./historique-livraisons.component.css']
})
export class HistoriqueLivraisonsComponent implements OnInit {

  livraisons: Livraison[];
  selectedLivraison: Livraison;
  searchParams: LivraisonSearch = new LivraisonSearch();
  edition: boolean;
  consultation: boolean;
  @ViewChild('dt') table: Table;

  dd: Date;
  df: Date;
  vRadio: string;

  constructor(private livraisonService: LivraisonService, private autorisationService: AutorisationService,
    private datePipe: DatePipe) {
  }
  ngOnInit() {
    const obj = this.autorisationService.checkAutorisations1('historique-livraisons');
    this.edition = obj.edition;
    this.consultation = obj.consultation;
    this.livraisonService.getToday().subscribe(data => this.livraisons = data);
  }
  clear(table: Table) {
    table.clear();
  }

  reset() {
    this.livraisonService.getToday().subscribe(data => this.livraisons = data);
    this.searchParams = new LivraisonSearch();
    this.dd = undefined;
    this.df = undefined;
    this.vRadio = undefined;
  }

  findLivraisons() {
    if (this.dd && this.df && this.dd <= this.df) {
      this.searchParams.dateCreationDebut = this.datePipe.transform(this.dd, 'yyyy-MM-ddTHH:mm:ss.001');
      this.searchParams.dateCreationFin = this.datePipe.transform(this.df, 'yyyy-MM-ddT23:59:59.999');
    }
    if (this.vRadio) {
      this.searchParams.validation = this.vRadio.includes('true');
    }
    if (this.searchParams && Object.keys(this.searchParams).length > 0) {
      this.livraisonService.find(this.searchParams).subscribe(data => this.livraisons = data);
    }
  }
}
