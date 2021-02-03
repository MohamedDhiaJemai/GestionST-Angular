import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'app/model/Article.model';
import { ArticleService } from 'app/services/article/article.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-dataview-article',
  templateUrl: './dataview-article.component.html',
  styleUrls: ['./dataview-article.component.scss']
})
export class DataviewArticleComponent implements OnInit {

  articles: Article[];
  sortOptions: SelectItem[];

  sortOrder: number;
  sortField: string;
  sortKey: string;
  edition: boolean;
  consultation: boolean;

  constructor(private articleService: ArticleService, private router: Router) { }

  ngOnInit() {
    this.checkAutorisations();

    this.articleService.getAllArticle().subscribe(
      data => {
        console.log(data)
        this.articles = data;
      }
    );
    this.sortOptions = [
      { label: 'GARCON', value: 'GARCON' },
      { label: 'FILLE', value: 'FILLE' },
      { label: 'UNISEXE', value: 'UNISEXE' }
    ];
  }

  onSortChange(event) {
    const value = event.value;
    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else if (value.indexOf('UNISEXE') === 'UNISEXE') {
      this.sortKey = 'UNISEXE';
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
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
        if (element.metier === 'articles') {
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
