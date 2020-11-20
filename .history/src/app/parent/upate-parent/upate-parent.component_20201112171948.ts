import { Component, OnInit } from '@angular/core';
import { Parent } from 'app/model/Parent.model';
import { BsModalRef } from 'ngx-bootstrap/modal';
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

  constructor() { }

  ngOnInit(): void {
  }

}
