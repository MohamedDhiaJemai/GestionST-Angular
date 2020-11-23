import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'app/model/Article.model';
import { Stocks } from 'app/model/Stocks.model';
import { ArticleService } from 'app/services/article/article.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ajouter-taille',
  templateUrl: './ajouter-taille.component.html',
  styleUrls: ['./ajouter-taille.component.css']
})
export class AjouterTailleComponent implements OnInit {

  article: Article = new Article();
  urlphotoArticle = 'http://192.168.0.143:8443/image/get/';

  stock: Stocks = new Stocks();

  articleSubscription: Subscription;

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
  ngOnUpdateTaille(templateAnnulation: TemplateRef<any>) {
    this.article.stocks = this.stock;
    this.articleSubscription = this.articleService.updateArticle(this.article.id, this.article).subscribe(
      data => {
        this.routerNav.navigate(['/approvisionnement-article/' + this.article.id]);
      },
      err => {
        if (err.status === 500) {
          this.modalRef.hide();
          this.modalRefAnnul = this.modalService.show(templateAnnulation);
          console.log('STATUS 500');
        }
      }
    );
    this.modalRef.hide();
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
