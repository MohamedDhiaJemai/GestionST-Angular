import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Parent } from 'app/model/Parent.model';
import { ParentService } from 'app/services/parent/parent.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-upate-parent',
  templateUrl: './upate-parent.component.html',
  styleUrls: ['./upate-parent.component.css']
})
export class UpateParentComponent implements OnInit {

  parent: Parent = new Parent();
  parentSubscription: Subscription;

  modalRef: BsModalRef;
  modalRefAnnul: BsModalRef;

  constructor(private parentService: ParentService, private router: ActivatedRoute,
    private routerNav: Router, private modalService: BsModalService) { }

  ngOnInit() {
    const id = this.router.snapshot.params['id'];
    this.parentSubscription = this.parentService.findById(id).subscribe(
      data => {
        this.parent = data;
      }
    );
  }

  ngOnUpdateParent(templateAnnulation: TemplateRef<any>) {

    this.parentSubscription = this.parentService.updateParent(this.parent.id, this.parent).subscribe(
      data => {
        this.routerNav.navigate(['/parents-list']);
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

  public openModal (template: TemplateRef <any>) {
    this.modalRef = this.modalService.show(template);
  }

}
