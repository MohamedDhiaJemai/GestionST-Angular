import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'app/model/Utilisateur.model';
import { UserService } from 'app/services/user/user.service';
import { RoleService } from 'app/services/role/role.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: Utilisateur = new Utilisateur();

  listRole: any[];
  selectedRole: any[];

  constructor(private userService: UserService,  private router: Router, 
    private roleService: RoleService) { }

  ngOnInit(): void {
    this.roleService.getAllRole().subscribe(
      data=>{
        this.listRole = data;
      }
    );

  }

  onAddUser() {
    console.log('add role');
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
