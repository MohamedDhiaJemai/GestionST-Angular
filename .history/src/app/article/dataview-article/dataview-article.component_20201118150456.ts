import { Component, OnInit } from '@angular/core';
import { Article } from 'app/model/Article.model';
import { ArticleService } from 'app/services/article/article.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-dataview-article',
  templateUrl: './dataview-article.component.html',
  styleUrls: ['./dataview-article.component.css']
})
export class DataviewArticleComponent implements OnInit {

  articles: Article[];
  sortOptions: SelectItem[];
  sortOrder: number;
  sortField: string;
  sortKey: string;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getAllArticle().subscribe(
      data => {
        console.log(data)
        this.articles = data;
      }
    );
    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ];
  }

}
