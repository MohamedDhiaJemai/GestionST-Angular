import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'app/model/Article.model';
import { ArticleService } from 'app/services/article/article.service';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';
import { environment } from 'environments/environment';

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
  constructor(private articleService: ArticleService, private activatedRoute: ActivatedRoute,
    private autorisationService: AutorisationService) { }
  ngOnInit() {
    const obj = this.autorisationService.checkAutorisations1('approvisionnement');
    this.edition = obj.edition;
    this.consultation = obj.consultation;
    const id = this.activatedRoute.snapshot.params['id'];
    this.articleService.findById(id).subscribe(
      data => {
        this.article = data;
      }
    );

  }
}
