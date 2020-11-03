import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'app/model/Role.model';
import { RoleService } from 'app/services/role/role.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.css']
})
export class UpdateRoleComponent implements OnInit {

  role: Role = new Role();
  roleSubscription: Subscription;
  ancienRole: string;

  modalRef: BsModalRef;
  modalRefAnnul: BsModalRef;

  constructor(private roleService: RoleService,
    private router: ActivatedRoute,
    private routerNav: Router, private modalService: BsModalService) { }

  ngOnInit() {
    const id = this.router.snapshot.params['id'];
    console.log('id', id);
    this.roleSubscription = this.roleService.findById(id).subscribe(
      data => {
        this.ancienRole = data.designation;
        console.log('ancienRole', this.ancienRole);
        this.role = data;
      });
  }

  ngOnUpdateRole(templateAnnulation: TemplateRef<any>) {
    console.log('role', this.role)
    this.roleSubscription = this.roleService.updateRole(this.role.id, this.role).subscribe(
      data => {
        this.routerNav.navigate(['/role-list']);
      } ,
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

}
