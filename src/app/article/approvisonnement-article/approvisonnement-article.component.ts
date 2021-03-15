import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'app/model/Article.model';
import { ApprovisionnementService } from 'app/services/approvisonnement/approvisionnement.service';
import { ArticleService } from 'app/services/article/article.service';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';
import { environment } from 'environments/environment';
import { data } from 'jquery';

@Component({
  selector: 'app-approvisonnement-article',
  templateUrl: './approvisonnement-article.component.html',
  styleUrls: ['./approvisonnement-article.component.css']
})
export class ApprovisonnementArticleComponent implements OnInit {
  article: Article = new Article();
  urlphotoArticle = environment.apiUrl + 'image/get/';
  edition: boolean;
  consultation: boolean;
  id: any;
  constructor(private articleService: ArticleService, private activatedRoute: ActivatedRoute,
    private autorisationService: AutorisationService, private approvisionnementService: ApprovisionnementService) { }
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    const obj = this.autorisationService.checkAutorisations1('approvisionnement');
    this.edition = obj.edition;
    this.consultation = obj.consultation;
    this.articleService.findById(this.id).subscribe(
      data => {
        this.article = data;
      }
    );
  }
  deleteStock(idStock: number) {
    this.approvisionnementService.deleteStock(idStock).subscribe(data => {
      this.articleService.findById(this.id).subscribe(
        dataa => {
          this.article = dataa;
        });
    });
  }
}
