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

export enum tailles {
  L = 'L',
  M = 'M',
  S = 'S',
  UNIQUE = 'UNIQUE',
  XL = 'XL',
  XS = 'XS',
  XXL = 'XXL',
}

@Component({
  selector: 'app-ajouter-taille',
  templateUrl: './ajouter-taille.component.html',
  styleUrls: ['./ajouter-taille.component.scss']
})
export class AjouterTailleComponent implements OnInit {

  article: Article = new Article();
  approvisionnement: Approvisonnement = new Approvisonnement();
  urlphotoArticle: string;

  tailles: SelectItem[];
  item: string;


  stockslist: Stocks;
  listTaille: string[] = [];

  constructor(private articleService: ArticleService, private route: ActivatedRoute, private modalService: BsModalService,
    private routerNav: Router, private approvisonnementService: ApprovisionnementService) {
    this.tailles = Object.keys(tailles).map(key => ({ label: tailles[key], value: key }));
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.urlphotoArticle = 'http://192.168.0.143:8443/image/get/' + id;
    this.articleService.findById(id).subscribe(
      data => {

        this.article = data;
        this.stockslist = this.article.stocks;
        this.approvisionnement.article = data;
        console.log(this.article.stocks)
        this.article.stocks.forEach(element => {
          this.listTaille.push(element.taille)
        });
      }
    );
  }

  ngOnAddApprovisionnement() {
    console.log('Approvisionnement', this.approvisionnement);
    this.approvisonnementService.addApprovisonnement(this.approvisionnement).subscribe(
      data => this.routerNav.navigate(['approvisionnement-article/', this.article.id]),
      error => console.log(error)
    );
  }

}
