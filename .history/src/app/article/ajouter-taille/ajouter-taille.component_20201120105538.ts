import { Component, OnInit } from '@angular/core';
import { Article } from 'app/model/Article.model';

@Component({
  selector: 'app-ajouter-taille',
  templateUrl: './ajouter-taille.component.html',
  styleUrls: ['./ajouter-taille.component.css']
})
export class AjouterTailleComponent implements OnInit {

  article: Article = new Article();
  urlphotoArticle = 'http://192.168.0.143:8443/image/get/';

  constructor() { }

  ngOnInit(): void {
  }

}
