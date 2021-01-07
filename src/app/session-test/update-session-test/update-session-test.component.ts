import { DatePipe } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionTest } from 'app/model/SessionTest.model';
import { CategorieService } from 'app/services/categorie/categorie.service';
import { SessionTestService } from 'app/services/session-test/session-test.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-update-session-test',
  templateUrl: './update-session-test.component.html',
  styleUrls: ['./update-session-test.component.css']
})
export class UpdateSessionTestComponent implements OnInit {


  session: SessionTest = new SessionTest();
  categories: SelectItem[];

  modalRef: BsModalRef;
  modalRefAnnul: BsModalRef;
  id: number;

  annees: string;

  ds: Date;
  fs: Date;
  di: Date;
  fi: Date;

  constructor(private sessionTestService: SessionTestService,
    private categorieService: CategorieService,
    private router: ActivatedRoute, private datePipe: DatePipe,
    private routerNav: Router, private modalService: BsModalService) {
  }

  ngOnInit() {

    this.id = this.router.snapshot.params['id'];
    // const now = new Date();
    // const year = now.getFullYear();
    // this.annees = (year - 45).toString() + ':' + (year - 4).toString();
    // console.log(this.annees);

    this.categorieService.getAllCategorie().subscribe(
      data => {
        this.categories = data;
      }
    );

    this.sessionTestService.findById(this.id).subscribe(
      data => {
        this.session = data;
        this.ds = new Date(this.session.debutSession);
        this.fs = new Date(this.session.finSession);
        this.di = new Date(this.session.debutInscription);
        this.fi = new Date(this.session.finInscription);
        console.log(this.session)
      }
    );
  }

  ngOnUpdateSession(templateAnnulation: TemplateRef<any>) {
    this.session.debutSession = this.datePipe.transform(this.ds, 'yyyy-MM-dd');
    this.session.finSession = this.datePipe.transform(this.fs, 'yyyy-MM-dd');
    this.session.debutInscription = this.datePipe.transform(this.di, 'yyyy-MM-dd');
    this.session.finInscription = this.datePipe.transform(this.fi, 'yyyy-MM-dd');

    // this.inscription.dateNaissance = new Date(Date.UTC(this.date.getFullYear(), this.date.getMonth(), this.date.getDate()));
    this.sessionTestService.update(this.session.id, this.session).subscribe(
      data => {
        this.routerNav.navigate(['/sessions-test']);
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
