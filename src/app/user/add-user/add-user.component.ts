import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'app/model/Utilisateur.model';
import { UserService } from 'app/services/user/user.service';
import { RoleService } from 'app/services/role/role.service';
import { Role } from 'app/model/Role.model';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  user: Utilisateur = new Utilisateur();
  roles: Role[];

  constructor(private userService: UserService, private router: Router,
    private roleService: RoleService) { }

  ngOnInit(): void {
    this.roleService.getAllRole().subscribe(
      data => {
        this.roles = data;
      }
    );
  }

  onAddUser() {
    this.userService.addUtilisateur(this.user).subscribe(
      data => {
        this.router.navigate(['utilisateurs'])
      }
    );
  }

}
