import { Component, OnInit } from '@angular/core';
import { Role } from 'app/model/Role.model';
import { RoleService } from 'app/services/role/role.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {

  role: Role;

  constructor(private roleService: RoleService) { }

  ngOnInit(): void {
  }

  onAddRole() {
    this.userService.addUtilisateur(this.user).subscribe(
      data => this.router.navigate(['userList']),
      err => {
        if (err.status === 500) {
          console.log('problem with username');
        }
      }
    );
  }


}
