import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'app/model/Utilisateur.model';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user: Utilisateur = new Utilisateur();
  userSubscription: Subscription;


  modalRef: BsModalRef;
  modalRefAnnul: BsModalRef;

  constructor() { }

  ngOnInit(): void {
  }

}
