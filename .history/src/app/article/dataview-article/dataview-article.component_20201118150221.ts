import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dataview-article',
  templateUrl: './dataview-article.component.html',
  styleUrls: ['./dataview-article.component.css']
})
export class DataviewArticleComponent implements OnInit {

  constructor(private articleService: articleService) { }

  ngOnInit(): void {
  }

}
