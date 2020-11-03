import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'app/model/Utilisateur.model';
import { UserService } from 'app/services/user/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: Utilisateur = new Utilisateur();

  listRole: any[];
  selectedRole : any[];

  constructor(private userService: UserService,  private router: Router, 
    private roleService: RoleSevice) { }

  ngOnInit(): void {

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
