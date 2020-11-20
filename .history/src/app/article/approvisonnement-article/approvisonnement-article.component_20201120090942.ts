import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approvisonnement-article',
  templateUrl: './approvisonnement-article.component.html',
  styleUrls: ['./approvisonnement-article.component.css']
})
export class ApprovisonnementArticleComponent implements OnInit {

  constructor(private articleService: ArticleService, private router: ActivatedRouter) { }

  ngOnInit() {
    const id = this.router.snapshot
  }

}
