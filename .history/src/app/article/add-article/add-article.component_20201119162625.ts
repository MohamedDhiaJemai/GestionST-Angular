import { Component, OnInit } from '@angular/core';
import { Article } from 'app/model/Article.model';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MessageService, SelectItem } from 'primeng/api';

export enum sexe {
  FILLE = 'FILLE',
  GARCON = 'GARCON',
  UNISEXE = 'UNISEXE'
}

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css'],
  providers: [MessageService]
})
export class AddArticleComponent implements OnInit {

  article: Article = new Article();
  urlphotoArticle = 'http://192.168.0.143:8443/image/get/';

  sexes: SelectItem[];
  item: string;

  modalRef: BsModalRef;
  modalRefAnnul: BsModalRef;

  myfile: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
