import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'app/model/Role.model';
import { RoleService } from 'app/services/role/role.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {

  role: Role = new Role();

  constructor(private roleService: RoleService, private router: Router) { }

  ngOnInit(): void {
  }

  onAddRole() {
    this.roleService.addRole(this.role).subscribe(
      data => this.router.navigate(['roles'])
    );
  }


}
