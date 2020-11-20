import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'app/model/Article.model';
import { ArticleService } from 'app/services/article/article.service';

@Component({
  selector: 'app-consulter-article',
  templateUrl: './consulter-article.component.html',
  styleUrls: ['./consulter-article.component.css']
})
export class ConsulterArticleComponent implements OnInit {

  article: Article = new Article();
  urlphotoArticle = 'http://192.168.0.143:8443/image/get/';

  constructor(private articleService: ArticleService, private router: ActivatedRoute) { }

  ngOnInit() {
    const id = this.router.snapshot.params['id'];
    this.articleService.findById(id).subscribe(
      data => {
        this.article = data;
        console.log(this.article)
      }
    );
  }

}
