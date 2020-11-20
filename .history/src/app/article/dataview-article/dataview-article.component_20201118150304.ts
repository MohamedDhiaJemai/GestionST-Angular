import { Component, OnInit } from '@angular/core';
import { Article } from 'app/model/Article.model';
import { ArticleService } from 'app/services/article/article.service';

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

  ngOnInit(): void {
  }

}
