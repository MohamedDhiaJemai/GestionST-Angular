import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'app/model/Article.model';
import { ChangerTailleInfos } from 'app/model/ChangerTailleInfos.model';
import { Chaussette, Gant, Habit, Pointure } from 'app/model/Enums.model';
import { Livraison } from 'app/model/Livraison.model';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';
import { LivraisonService } from 'app/services/livraison/livraison.service';
import { SelectItem } from 'primeng/api';

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
  paramChangement: ChangerTailleInfos;
  visibleDialog: boolean;
  article: Article;
  habits: SelectItem[];
  pointures: SelectItem[];
  gants: SelectItem[];
  chaussettes: SelectItem[];
  validated: boolean;

  constructor(private livraisonService: LivraisonService, private autorisationService: AutorisationService) {
    this.habits = Object.keys(Habit).map(key => ({ label: Habit[key], value: key }));
    this.pointures = Object.keys(Pointure).map(key => ({ label: Pointure[key], value: key }));
    this.gants = Object.keys(Gant).map(key => ({ label: Gant[key], value: key }));
    this.chaussettes = Object.keys(Chaussette).map(key => ({ label: Chaussette[key], value: key }));
  }
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
  hideDialog() {
    this.visibleDialog = false;
  }
  showDialog(id: number, taille: string, quantite: number, article: Article) {
    this.paramChangement = new ChangerTailleInfos();
    this.paramChangement.id = id;
    this.paramChangement.taille = taille;
    this.paramChangement.quantite = quantite;
    this.article = article;
    this.validated = false;
    this.visibleDialog = true;
  }
  validerChangement() {
    if (!this.validated) {
      this.validated = true;
      this.livraisonService.changerTaille(this.paramChangement).subscribe(data => {
        this.livraisons = data;
        this.tout = true;
        this.livraisons.forEach(element => {
          if (element.validation) {
            this.tout = false;
          }
        });
        this.visibleDialog = false;
        this.validated = false;
      }, err => {
        this.validated = false;
      });
    }

  }
}
