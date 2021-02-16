import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Borne } from 'app/model/Borne.model';
import { BorneService } from 'app/services/borne/borne.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-borne',
  templateUrl: './update-borne.component.html',
  styleUrls: ['./update-borne.component.css']
})
export class UpdateBorneComponent implements OnInit {

  borne: Borne = new Borne();
  borneSubscription: Subscription;

  modalRef: BsModalRef;
  modalRefAnnul: BsModalRef;

  constructor(private borneService: BorneService, private router: ActivatedRoute,
    private routerNav: Router, private modalService: BsModalService) { }

  ngOnInit() {
    const id = this.router.snapshot.params['id'];
    this.borneSubscription = this.borneService.findById(id).subscribe(
      data => {
        this.borne = data;
      }
    );
  }

  ngOnUpdateBorne(templateAnnulation: TemplateRef<any>) {

    this.borneSubscription = this.borneService.updateBorne(this.borne.id, this.borne).subscribe(
      data => {
        this.routerNav.navigate(['/bornes']);
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
