import { Component, OnInit } from '@angular/core';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  edition: boolean;
  consultation: boolean;
  constructor(private autorisationService: AutorisationService) { }
  ngOnInit(): void {
    const obj = this.autorisationService.checkAutorisations1('articles');
    this.edition = obj.edition;
    this.consultation = obj.consultation;
  }
}
