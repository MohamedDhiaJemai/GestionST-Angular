import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'app/model/Role.model';
import { RoleService } from 'app/services/role/role.service';
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

  constructor(private roleService: RoleService,
    private router: ActivatedRoute,
    private routerNav: Router) { }

  ngOnInit() {
    const id = this.router.snapshot.params['id'];
    console.log('id', id);
    this.roleSubscription = this.roleService.findById(id).subscribe(
      data => {
        const ancienRole = data.designation;
        console.log('ancienRole', ancienRole);
        this.role = data;
      });
  }

  ngOnUpdateRole() {
    console.log('role', this.role)
    this.roleSubscription = this.roleService.updateRole(this.role.id, this.role).subscribe(
      data => {
        this.routerNav.navigate(['/role-list']);
      });
  }

}
