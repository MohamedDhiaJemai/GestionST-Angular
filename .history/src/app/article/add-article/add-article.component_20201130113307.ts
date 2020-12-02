import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'app/model/Article.model';
import { ArticleService } from 'app/services/article/article.service';
import { ImageProduitService } from 'app/services/image-produit/image-produit.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MessageService, SelectItem } from 'primeng/api';
import { Subscription } from 'rxjs';

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
  articleSubscription: Subscription;

  sexes: SelectItem[];
  item: string;

  url;
  format;

  file: File;

  constructor(private articleService: ArticleService,
    private routerNav: Router, private imageProduitService: ImageProduitService) {
    this.sexes = Object.keys(sexe).map(key => ({ label: sexe[key], value: key }));
    this.file = null;
  }

  onSelectFile(event) {
    console.log(event)
    this.file = event.target.files && event.target.files[0];
    console.log(this.file)
    if (this.file) {
      const reader = new FileReader();
      reader.readAsDataURL(this.file);
      if (this.file.type.indexOf('image') > -1) {
        this.format = 'image';
      }
      reader.onload = (event) => {
        this.url = (<FileReader>event.target).result;
      }
    }
  }

  ngOnInit(): void {
  }

  onAddArticle() {
    this.articleService.addArticle(this.article).subscribe(
      data => {

        console.log(data.id)
        console.log(this.url)
        const formData = new FormData();
        formData.append(name, this.url);
        console.log('formdata', formData);

        this.imageProduitService.upload(formData, data.id).subscribe(
          data2 => {
            console.log('ok');
          }
        );
        // this.routerNav.navigate(['articles']);
      },
      error => console.log(error)
    );

    console.log('subscription', this.articleSubscription)
  }

}
