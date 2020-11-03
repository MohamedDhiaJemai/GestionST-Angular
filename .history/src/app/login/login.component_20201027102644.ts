import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserAuthentification } from 'app/model/UserAuthentification.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userAuth: UserAuthentification;

  constructor() { }

  ngOnInit(): void {
  }

}
