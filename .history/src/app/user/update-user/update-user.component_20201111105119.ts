import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from 'app/model/Utilisateur.model';
import { RoleService } from 'app/services/role/role.service';
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

  listRole: any[];
  selectedRole: any[];

  constructor(private userService: UserService,private router: ActivatedRoute,
    private routerNav: Router, private modalService: BsModalService,
    private roleService: RoleService) { }

  ngOnInit() {
    const id = this.router.snapshot.params['id'];

    this.roleService.getAllRole().subscribe(
      data => {
        this.listRole = data;
      }
    );

    console.log('id', id);
    this.userSubscription = this.userService.findById(id).subscribe(
      data => {
        this.user = data;

      });
  }

  ngOnUpdateUtilisateur(templateAnnulation: TemplateRef<any>) {
    console.log('user', this.user)
    this.userSubscription = this.userService.updateUtilisateur(this.user.id, this.user).subscribe(
      data => {
        this.routerNav.navigate(['/user-List']);
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
