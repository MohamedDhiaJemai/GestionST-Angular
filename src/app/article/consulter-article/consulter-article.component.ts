import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'app/model/Article.model';
import { ArticleService } from 'app/services/article/article.service';

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

  constructor(private articleService: ArticleService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.checkAutorisations();
    const id = this.activatedRoute.snapshot.params['id'];
    this.urlphotoArticle = 'http://127.0.0.1:8443/image/get/' + id;
    this.articleService.findById(id).subscribe(
      data => {
        this.article = data;
        console.log(this.article)
      }
    );
  }

  checkAutorisations() {
    const autorisations: Array<any> = JSON.parse(localStorage.getItem('autorisations'));

    const roless: Array<any> = JSON.parse(localStorage.getItem('roles'));
    this.edition = false;
    this.consultation = false;
    this.consultationStock = false;
    if (roless.includes('ADMIN')) {
      this.edition = true;
      this.consultation = true;
      this.consultationStock = true;
    } else {
      autorisations.forEach(element => {
        if (element.metier === 'articles') {
          if (!element.consultation) {
            this.router.navigateByUrl('/acceuil');
          }
          this.edition = element.edition;
          this.consultation = element.consultation;
        }
        if (element.metier === 'approvisionnement') {
          this.consultationStock = element.consultation;
        }
      });
    }
  }

}
