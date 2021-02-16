import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livraison } from 'app/model/Livraison.model';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';
import { LivraisonService } from 'app/services/livraison/livraison.service';

@Component({
  selector: 'app-search-livraison',
  templateUrl: './search-livraison.component.html',
  styleUrls: ['./search-livraison.component.css']
})
export class SearchLivraisonComponent implements OnInit {
  livraisons: Livraison[];
  selectedLivraison: Livraison;
  exist: boolean;
  idTransaction: string;
  tout = true;
  edition: boolean;
  consultation: boolean;
  submitted: boolean;
  constructor(private livraisonService: LivraisonService, private autorisationService: AutorisationService) { }
  ngOnInit(): void {
    const obj = this.autorisationService.checkAutorisations1('livraison');
    this.edition = obj.edition;
    this.consultation = obj.consultation;
    this.submitted = false;
    this.exist = false;
    this.idTransaction = '';
  }
  findLivraisons() {
    this.submitted = true;
    this.livraisonService.findByTransaction(this.idTransaction).subscribe(data => {
      this.livraisons = data;
      this.exist = this.livraisons.length > 0;
      this.tout = true;
      this.livraisons.forEach(element => {
        if (element.validation) {
          this.tout = false;
        }
      });
    }, err => {
      this.exist = false;
      this.livraisons = [];
    }
    );
  }
  validerTout() {
    this.livraisonService.validerByTransaction(this.idTransaction).subscribe(
      data => {
        this.livraisonService.findByTransaction(this.idTransaction).subscribe(dataa => {
          this.livraisons = dataa;
          this.tout = true;
          this.livraisons.forEach(element => {
            if (element.validation) {
              this.tout = false;
            }
          });
        });
      }
    )
  };
  validerById(id: number) {
    this.livraisonService.validerById(id).subscribe(data => {
      this.livraisonService.findByTransaction(this.idTransaction).subscribe(dataa => {
        this.livraisons = dataa;
        this.tout = true;
        this.livraisons.forEach(element => {
          if (element.validation) {
            this.tout = false;
          }
        });
      });
    });
  }
  clearLivraisons() {
    this.exist = false;
    this.livraisons = [];
    this.idTransaction = '';
  }
}
