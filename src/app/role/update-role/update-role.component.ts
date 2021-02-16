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
    this.roleSubscription = this.roleService.findById(id).subscribe(
      data => {
        this.ancienRole = data.designation;
        this.role = data;
      });
  }

  ngOnUpdateRole(templateAnnulation: TemplateRef<any>) {
    this.roleSubscription = this.roleService.updateRole(this.role.id, this.role).subscribe(
      data => {
        this.routerNav.navigate(['/roles']);
      },
      err => {
        this.modalRef.hide();
        this.modalRefAnnul = this.modalService.show(templateAnnulation);
      }
    );
    this.modalRef.hide();
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
