import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'app/model/Utilisateur.model';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  role: Utilisateur = new Utilisateur();
  roleSubscription: Subscription;
  ancienRole: string;

  modalRef: BsModalRef;
  modalRefAnnul: BsModalRef;

  constructor() { }

  ngOnInit(): void {
  }

}
