import { Component, OnInit } from '@angular/core';
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
    this.parentService.findById(id).subscribe(
      data =>{
        this.parent = data;
      }
    );
  }

}
