import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from 'app/model/Utilisateur.model';
import { UserService } from 'app/services/user/user.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
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

  constructor(private userService: UserService,private router: ActivatedRoute,
    private routerNav: Router, private modalService: BsModalService) { }

  ngOnInit(){
    const id = this.router.snapshot.params['id'];
    console.log('id', id);
    this.userSubscription = this.userService.findById(id).subscribe(
      data => {
        this.user = data;
      });
  }

}
