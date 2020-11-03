import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
