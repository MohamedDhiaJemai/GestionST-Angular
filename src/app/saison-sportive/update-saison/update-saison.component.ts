import { DatePipe } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SaisonSportive } from 'app/model/SaisonSportive.model';
import { SaisonSportiveService } from 'app/services/saison-sportive/saison-sportive.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-saison',
  templateUrl: './update-saison.component.html',
  styleUrls: ['./update-saison.component.css']
})
export class UpdateSaisonComponent implements OnInit {

  saison: SaisonSportive = new SaisonSportive();
  saisonSubscription: Subscription;
  ancienSaison: string;
  modalRef: BsModalRef;
  modalRefAnnul: BsModalRef;
  ds: Date;
  fs: Date;
  constructor(private saisonSportiveService: SaisonSportiveService,
    private router: ActivatedRoute,
    private routerNav: Router, private modalService: BsModalService, private datePipe: DatePipe) { }

  ngOnInit() {
    const id = this.router.snapshot.params['id'];
    this.saisonSubscription = this.saisonSportiveService.findById(id).subscribe(
      data => {
        this.ancienSaison = data.designation;
        this.saison = data;
        this.ds = new Date(this.saison.dateDebut);
        this.fs = new Date(this.saison.dateFin);
      });
  }

  ngOnUpdateSaison(templateAnnulation: TemplateRef<any>) {
    this.saison.dateDebut = this.datePipe.transform(this.ds, 'yyyy-MM-dd');
    this.saison.dateFin = this.datePipe.transform(this.fs, 'yyyy-MM-dd');
    this.saisonSubscription = this.saisonSportiveService.update(this.saison.id, this.saison).subscribe(
      data => {
        this.routerNav.navigate(['/saisons']);
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
