import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'app/model/Article.model';
import { ArticleService } from 'app/services/article/article.service';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';
import { environment } from 'environments/environment';
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
  imgUrl = environment.apiUrl + 'image/get/';
  constructor(private articleService: ArticleService, private autorisationService: AutorisationService) { }
  ngOnInit() {
    const obj = this.autorisationService.checkAutorisations1('articles');
    this.edition = obj.edition;
    this.consultation = obj.consultation;
    this.articleService.getAllArticle().subscribe(
      data => {
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
}
