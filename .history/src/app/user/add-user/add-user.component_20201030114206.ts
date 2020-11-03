import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: Utilisateur = new Utilisateur();


  constructor(private userService: UserService,  private router: Router) { }

  ngOnInit(): void {
  }

  onAddUser() {
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
