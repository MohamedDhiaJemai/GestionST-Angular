import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'app/model/Article.model';
import { Stocks } from 'app/model/Stocks.model';
import { ArticleService } from 'app/services/article/article.service';

@Component({
  selector: 'app-approvisonnement-article',
  templateUrl: './approvisonnement-article.component.html',
  styleUrls: ['./approvisonnement-article.component.css']
})
export class ApprovisonnementArticleComponent implements OnInit {

  article: Article = new Article();
  urlphotoArticle = 'http://127.0.0.1:8443/image/get/';
  // stocks: Stocks = new Stocks();
  edition: boolean;
  consultation: boolean;


  constructor(private articleService: ArticleService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.checkAutorisations();

    const id = this.activatedRoute.snapshot.params['id'];
    this.articleService.findById(id).subscribe(
      data => {
        this.article = data;
        console.log(this.article.stocks);
      }
    );

  }

  checkAutorisations() {
    const autorisations: Array<any> = JSON.parse(localStorage.getItem('autorisations'));

        const roless: Array<any> = JSON.parse(localStorage.getItem('roles'));
    this.edition = false;
    this.consultation = false;
    if (roless.includes('ADMIN')) {
      this.edition = true;
      this.consultation = true;
    } else {
      autorisations.forEach(element => {
        if (element.metier === 'approvisionnement') {
          if (!element.consultation) {
            this.router.navigateByUrl('/acceuil');
          }
          this.edition = element.edition;
          this.consultation = element.consultation;
        }
      });
    }
  }

}
