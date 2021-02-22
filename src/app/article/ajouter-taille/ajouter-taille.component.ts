import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Approvisonnement } from 'app/model/Approvisonnement.model';
import { Article } from 'app/model/Article.model';
import { Chaussette, Gant, Habit, Pointure, Unique } from 'app/model/Enums.model';
import { ArticleService } from 'app/services/article/article.service';
import { environment } from 'environments/environment';
import { BsModalService } from 'ngx-bootstrap/modal';
import { SelectItem } from 'primeng/api';
import { ApprovisionnementService } from '../../services/approvisonnement/approvisionnement.service';


@Component({
  selector: 'app-ajouter-taille',
  templateUrl: './ajouter-taille.component.html',
  styleUrls: ['./ajouter-taille.component.scss']
})
export class AjouterTailleComponent implements OnInit {
  article: Article = new Article();
  approvisionnement: Approvisonnement = new Approvisonnement();
  urlphotoArticle: string;
  habits: SelectItem[];
  pointures: SelectItem[];
  gants: SelectItem[];
  chaussettes: SelectItem[];
  uniques: SelectItem[];
  item: string;
  constructor(private articleService: ArticleService, private route: ActivatedRoute, private modalService: BsModalService,
    private routerNav: Router, private approvisonnementService: ApprovisionnementService) {
    this.habits = Object.keys(Habit).map(key => ({ label: Habit[key], value: key }));
    this.pointures = Object.keys(Pointure).map(key => ({ label: Pointure[key], value: key }));
    this.gants = Object.keys(Gant).map(key => ({ label: Gant[key], value: key }));
    this.chaussettes = Object.keys(Chaussette).map(key => ({ label: Chaussette[key], value: key }));
    this.uniques = Object.keys(Unique).map(key => ({ label: Unique[key], value: key }));
  }
  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.urlphotoArticle = environment.apiUrl + 'image/get/' + id;
    this.articleService.findById(id).subscribe(
      data => {
        this.article = data;
        this.approvisionnement.article = data;
      }
    );
  }
  ngOnAddApprovisionnement() {
    this.approvisonnementService.addApprovisonnement(this.approvisionnement).subscribe(
      data => this.routerNav.navigate(['approvisionnement-article/', this.article.id])
    );
  }
}
