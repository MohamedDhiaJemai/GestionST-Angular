import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Article } from 'app/model/Article.model';
import { CategoryTaille, Genre } from 'app/model/Enums.model';
import { ArticleService } from 'app/services/article/article.service';
import { ImageProduitService } from 'app/services/image-produit/image-produit.service';
import { PosteService } from 'app/services/poste/poste.service';
import { MessageService, SelectItem } from 'primeng/api';
import { Subscription } from 'rxjs';



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
  categorys: SelectItem[];
  item: string;
  postes: SelectItem[];
  url;
  format;
  file: File;
  uploadForm: FormGroup;

  constructor(private articleService: ArticleService,
    private formBuilder: FormBuilder,
    private routerNav: Router, private imageProduitService: ImageProduitService, private posteService: PosteService) {
    this.sexes = Object.keys(Genre).map(key => ({ label: Genre[key], value: key }));
    this.categorys = Object.keys(CategoryTaille).map(key => ({ label: CategoryTaille[key], value: key }));
    this.file = null;
  }

  onSelectFile(event) {
    this.file = event.target.files && event.target.files[0];
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
    this.uploadForm.get('profile').setValue(this.file);
  }

  ngOnInit() {
    this.posteService.getAll().subscribe(data => this.postes = data);
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }

  onAddArticle() {
    if (this.article.visible === undefined) {
      this.article.visible = false;
    }
    if (this.article.exige === undefined) {
      this.article.exige = false;
    }
    if (this.url !== undefined) {
      this.articleService.addArticle(this.article).subscribe(
        data => {
          const formData = new FormData();
          formData.append('file', this.uploadForm.get('profile').value);

          this.imageProduitService.upload(formData, data.id).subscribe(
            data2 => {
              this.routerNav.navigate(['articles']);
            }
          );
        }
      );
    }
  }

}
