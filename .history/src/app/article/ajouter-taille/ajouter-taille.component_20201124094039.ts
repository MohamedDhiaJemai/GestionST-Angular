import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Approvisonnement } from 'app/model/Approvisonnement.model';
import { Article } from 'app/model/Article.model';
import { Stocks } from 'app/model/Stocks.model';
import { ArticleService } from 'app/services/article/article.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import { ApprovisionnementService } from '../../services/approvisonnement/approvisionnement.service';

@Component({
  selector: 'app-ajouter-taille',
  templateUrl: './ajouter-taille.component.html',
  styleUrls: ['./ajouter-taille.component.css']
})
export class AjouterTailleComponent implements OnInit {

  article: Article = new Article();
  urlphotoArticle = 'http://192.168.0.143:8443/image/get/';

  stock: Stocks = new Stocks();

  approvisionnement: Approvisonnement;

  approvisionnementSubscription: Subscription;

  modalRef: BsModalRef;
  modalRefAnnul: BsModalRef;

  constructor(private articleService: ArticleService, private route: ActivatedRoute, private modalService: BsModalService,
    private routerNav: Router, private approvisonnementService: ApprovisionnementService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.articleService.findById(id).subscribe(
      data => {
        this.article = data;
      }
    );
  }

  ngOnAddApprovisionnement() {
    this.approvisionnement.quantite = 50;
    this.stock.quantite = 50;
    this.stock.taille = "L"

    this.approvisonnementService.addApprovisonnement(this.approvisionnement).subscribe(
      data => this.routerNav.navigate(['articles']),
      error => console.log(error)
    );
  }

}
