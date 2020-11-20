import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'app/model/Utilisateur.model';
import { UserService } from 'app/services/user/user.service';
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

  constructor(private userService: UserService,private router: ActivatedRoute,) { }

  ngOnInit(): void {
  }

}
