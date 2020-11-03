import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'app/model/Utilisateur.model';
import { UserService } from 'app/services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: Utilisateur[];

  constructor(userService: UserService) { }

  ngOnInit(): void {

  }

}
