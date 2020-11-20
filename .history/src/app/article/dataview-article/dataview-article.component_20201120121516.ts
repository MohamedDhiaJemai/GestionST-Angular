import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private articleService: ArticleService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.articleService.getAllArticle().subscribe(
      data => {
        console.log(data)
        this.articles = data;
      }
    );
    this.sortOptions = [
      { label: 'Garçon', value: 'GARCON' },
      { label: 'Fille', value: 'FILLE' },
      { label: 'Unisexe', value: 'UNISEXE' }
    ];
  }

  onSortChange(event) {
    const value = event.value;
    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else if (value.indexOf('Unisexe') === 'UNISEXE') {

      }
      else {
        this.sortOrder = 1;
        this.sortField = value;
      }
  }

}
