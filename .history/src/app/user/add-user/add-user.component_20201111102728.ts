import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'app/model/Utilisateur.model';
import { UserService } from 'app/services/user/user.service';
import { RoleService } from 'app/services/role/role.service';
import { Role } from 'app/model/Role.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  user: Utilisateur = new Utilisateur();

  listRole: any[];
  selectedRole: any[];
  roles: Role[];

  constructor(private userService: UserService, private router: Router,
    private roleService: RoleService) { }

  ngOnInit(): void {
    this.roleService.getAllRole().subscribe(
      data => {
        this.listRole = data;
      }
    );
    this.selectedRole = [];
  }

  onAddUser() {
    console.log('Selected Role', this.selectedRole);
    for (let i = 0; i < this.selectedRole.length; i++) {
      
    }
    console.log('add role');
    this.userService.addUtilisateur(this.user).subscribe(
      data => {

        this.router.navigate(['user-List'])
      },
      err => {
        if (err.status === 500) {
          console.log('problem with username');
        }
      }
    );
  }

}
