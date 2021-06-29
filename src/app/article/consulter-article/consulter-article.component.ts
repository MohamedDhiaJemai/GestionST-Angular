import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'app/model/Article.model';
import { ArticleService } from 'app/services/article/article.service';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-consulter-article',
  templateUrl: './consulter-article.component.html',
  styleUrls: ['./consulter-article.component.css']
})
export class ConsulterArticleComponent implements OnInit {
  article: Article = new Article();
  urlphotoArticle: string;
  edition: boolean;
  consultation: boolean;
  consultationStock: boolean;
  constructor(private articleService: ArticleService, private activatedRoute: ActivatedRoute,
    private autorisationService: AutorisationService, private routerNav: Router) { }
  ngOnInit() {
    const obj = this.autorisationService.checkAutorisations2('articles', 'approvisionnement');
    this.edition = obj.edition;
    this.consultation = obj.consultation;
    this.consultationStock = obj.consultationSup;
    const id = this.activatedRoute.snapshot.params['id'];
    this.urlphotoArticle = environment.apiUrl + 'image/get/' + id;
    this.articleService.findById(id).subscribe(
      data => {
        this.article = data;
      }
    );
  }

  delete(id: number) {
    this.articleService.delete(id).subscribe(
      data => {
        this.routerNav.navigate(['/articles']);
      }, err => {
        console.log(err);
        alert('Impossible de supprimer cet article!');
      }
    );
  }
}
