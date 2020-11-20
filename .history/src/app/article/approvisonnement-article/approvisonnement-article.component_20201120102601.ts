import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'app/model/Article.model';
import { ArticleService } from 'app/services/article/article.service';

@Component({
  selector: 'app-approvisonnement-article',
  templateUrl: './approvisonnement-article.component.html',
  styleUrls: ['./approvisonnement-article.component.css']
})
export class ApprovisonnementArticleComponent implements OnInit {

  article: Article = new Article();
  items: string[];

  constructor(private articleService: ArticleService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.articleService.findById(id).subscribe(
      data => {
        this.article = data;
        console.log(this.article)

      }
    );

    this.article.array.forEach(element => {
      this.items.push(this.article.stocks.taille)
      console.log(this.items)
    });

  }

}
