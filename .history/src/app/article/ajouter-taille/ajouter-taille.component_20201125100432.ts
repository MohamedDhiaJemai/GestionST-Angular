import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Approvisonnement } from 'app/model/Approvisonnement.model';
import { Article } from 'app/model/Article.model';
import { Stocks } from 'app/model/Stocks.model';
import { ArticleService } from 'app/services/article/article.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SelectItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { ApprovisionnementService } from '../../services/approvisonnement/approvisionnement.service';

export enum sexe {
  FILLE = 'FILLE',
  GARCON = 'GARCON',
  UNISEXE = 'UNISEXE'
}

@Component({
  selector: 'app-ajouter-taille',
  templateUrl: './ajouter-taille.component.html',
  styleUrls: ['./ajouter-taille.component.scss']
})
export class AjouterTailleComponent implements OnInit {

  articlee: Article = new Article();

  urlphotoArticle = 'http://192.168.0.143:8443/image/get/';

  approvisionnement: Approvisonnement;

  sexes: SelectItem[];
  item: string;

  constructor(private articleService: ArticleService, private route: ActivatedRoute, private modalService: BsModalService,
    private routerNav: Router, private approvisonnementService: ApprovisionnementService) {
    this.sexes = Object.keys(sexe).map(key => ({ label: sexe[key], value: key }));
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.articleService.findById(id).subscribe(
      data => {
        this.articlee = data;
      }
    );
  }

  ngOnAddApprovisionnement() {
    
    this.approvisionnement.article.id = this.articlee.id;
    this.approvisionnement.article.libelle = this.articlee.libelle;
    this.approvisionnement.article.prix = this.articlee.prix;
    this.approvisionnement.article.quantite = this.articlee.quantite;
    this.approvisionnement.article.sexe = this.articlee.sexe;
  
    console.log('Approvisionnement', this.approvisionnement);
    this.approvisonnementService.addApprovisonnement(this.approvisionnement).subscribe(
      data => this.routerNav.navigate(['articles']),
      error => console.log(error)
    );
  }

}
