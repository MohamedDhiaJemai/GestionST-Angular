import { DatePipe } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SaisonSportive } from 'app/model/SaisonSportive.model';
import { SessionTest } from 'app/model/SessionTest.model';
import { CategorieService } from 'app/services/categorie/categorie.service';
import { SaisonSportiveService } from 'app/services/saison-sportive/saison-sportive.service';
import { SessionTestService } from 'app/services/session-test/session-test.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-add-session-test',
  templateUrl: './add-session-test.component.html',
  styleUrls: ['./add-session-test.component.css']
})
export class AddSessionTestComponent implements OnInit {

  session: SessionTest = new SessionTest();
  categories: SelectItem[];
  saisons: SelectItem[];

  modalRef: BsModalRef;
  modalRefAnnul: BsModalRef;
  id: number;

  annees: string;

  ds: Date;
  fs: Date;
  di: Date;
  fi: Date;

  constructor(private sessionTestService: SessionTestService,
    private categorieService: CategorieService, private saisonService: SaisonSportiveService,
    private router: ActivatedRoute, private datePipe: DatePipe,
    private routerNav: Router, private modalService: BsModalService) {
  }

  ngOnInit() {
    this.saisonService.getAll().subscribe(data => this.saisons = data);
    // this.categorieService.findByIdSaison().subscribe(data => this.categories = data);
  }

  findCategories() {
    this.session.categorie = undefined;
    this.categorieService.findByIdSaison(this.session.saisonSportive.id).subscribe(data => this.categories = data);
  }

  ngOnUpdateSession(templateAnnulation: TemplateRef<any>) {
    this.session.debutSession = this.datePipe.transform(this.ds, 'yyyy-MM-dd');
    this.session.finSession = this.datePipe.transform(this.fs, 'yyyy-MM-dd');
    this.session.debutInscription = this.datePipe.transform(this.di, 'yyyy-MM-dd');
    this.session.finInscription = this.datePipe.transform(this.fi, 'yyyy-MM-dd');
    this.sessionTestService.add(this.session).subscribe(
      data => {
        this.routerNav.navigate(['/sessions-test']);
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
