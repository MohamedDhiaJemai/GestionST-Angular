import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';
import { Utilisateur } from 'app/model/Utilisateur.model';
import { RoleService } from 'app/services/role/role.service';
import { TokenService } from 'app/services/token/token.service';
import { UserService } from 'app/services/user/user.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: Utilisateur = new Utilisateur();


  modalRef: BsModalRef;
  modalRefAnnul: BsModalRef;
  jwtHelper: JwtHelper = new JwtHelper();
  permitted = false;
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private modalService: BsModalService) { }

  ngOnInit() {
    const username = this.activatedRoute.snapshot.params['id'];
    const loggedUsername = this.jwtHelper.decodeToken(localStorage.getItem('token')).sub
    if (username === loggedUsername) {
      this.permitted = true;
    }
    this.userService.findByUsername(username).subscribe(
      data => {
        this.user = data;
      });
  }

  ngOnUpdateUtilisateur() {
    this.userService.updateUtilisateur(this.user.id, this.user).subscribe(
      data => {
        this.modalRef.hide();
      }
    );
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
