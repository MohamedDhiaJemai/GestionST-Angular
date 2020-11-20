import { DatePipe } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JoueurAcamedie } from 'app/model/JoueurAcamedie.model';
import { CategorieService } from 'app/services/categorie/categorie.service';
import { JoueurAcademieService } from 'app/services/joueur-academie/joueur-academie.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SelectItem } from 'primeng/api';
import { Subscription } from 'rxjs';


export enum sexe {
  FILLE = 'FILLE',
  GARCON = 'GARCON'
}

@Component({
  selector: 'app-update-joueur-academie',
  templateUrl: './update-joueur-academie.component.html',
  styleUrls: ['./update-joueur-academie.component.css']
})
export class UpdateJoueurAcademieComponent implements OnInit {

  joueurAcademie: JoueurAcamedie = new JoueurAcamedie();
  sexes: SelectItem[];
  itemsCategories: SelectItem[];
  item: string;
  date: Date;
  joueurAcademieSubscription: Subscription;
  modalRef: BsModalRef;
  modalRefAnnul: BsModalRef;

  constructor(private joueurAcademieService: JoueurAcademieService,
    private categorieService: CategorieService,
    private router: ActivatedRoute, private datePipe: DatePipe,
    private routerNav: Router, private modalService: BsModalService) { }

  ngOnInit() {

    const id = this.router.snapshot.params['id'];

    this.categorieService.getAllCategorie().subscribe(
      data => {
        this.itemsCategories = data;
      }
    );

    this.joueurAcademieService.findById(id).subscribe(
      data => {
        this.joueurAcademie = data;
        this.date = new Date(this.joueurAcademie.dateNaissance);
        console.log(this.joueurAcademie)
      }
    );
  }

  ngOnUpdateJoueurAcademie(templateAnnulation: TemplateRef<any>) {
    this.joueurPro.dateNaissance = this.datePipe.transform(this.date, 'yyyy-MM-dd');
    this.joueurProSubscription = this.joueurProService.updatejProfessionnel(this.joueurPro.id, this.joueurPro).subscribe(
      data => {
        this.routerNav.navigate(['/consulter-jouteur-professionnel/' + this.joueurPro.id]);
      },
      err => {
        if (err.status === 500) {
          this.modalRef.hide();
          this.modalRefAnnul = this.modalService.show(templateAnnulation);
          console.log('STATUS 500');
          // this.routerNav.navigateByUrl('/role/details/' + id);
        }
      }
    );
    this.modalRef.hide();
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
