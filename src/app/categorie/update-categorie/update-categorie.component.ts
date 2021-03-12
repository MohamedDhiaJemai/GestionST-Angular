import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'app/model/Categorie.model';
import { SaisonSportive } from 'app/model/SaisonSportive.model';
import { CategorieService } from 'app/services/categorie/categorie.service';
import { SaisonSportiveService } from 'app/services/saison-sportive/saison-sportive.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: ['./update-categorie.component.css']
})
export class UpdateCategorieComponent implements OnInit {

  categorie: Categorie = new Categorie();
  categorieSubscription: Subscription;
  ancienCategorie: string;
  saisons: SaisonSportive[];
  annees: any[] = [];

  modalRef: BsModalRef;
  modalRefAnnul: BsModalRef;

  constructor(private categorieService: CategorieService,
    private router: ActivatedRoute,
    private routerNav: Router, private modalService: BsModalService, private saisonSportiveService: SaisonSportiveService) { }

  ngOnInit() {
    const now = new Date();
    const year = now.getFullYear();
    let i: number;
    for (i = 4; i < 45; i++) {
      const natif = year - i;
      this.annees.push({ label: natif.toString(), value: natif.toString() })
    }
    const id = this.router.snapshot.params['id'];
    this.categorieSubscription = this.categorieService.findById(id).subscribe(
      data => {
        this.ancienCategorie = data.designation;
        this.categorie = data;
        this.categorie.natifs.forEach(element => {
        })
      });
    this.saisonSportiveService.getAll().subscribe(
      data => {
        this.saisons = data;
      }
    );
  }

  ngOnUpdateCategorie(templateAnnulation: TemplateRef<any>) {
    this.categorieSubscription = this.categorieService.updateCategorie(this.categorie.id, this.categorie).subscribe(
      data => {
        this.routerNav.navigate(['/categories']);
      },
      err => {
        this.modalRef.hide();
        this.modalRefAnnul = this.modalService.show(templateAnnulation);
      }
    );
    this.modalRef.hide();
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
