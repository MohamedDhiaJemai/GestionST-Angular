import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';
import { UserAuthentification } from 'app/model/UserAuthentification.model';
import { LoginService } from 'app/services/login/login.service';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  userAuth: UserAuthentification;
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private authentificationService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(data, template: TemplateRef<any>) {

    this.authentificationService.login(data).subscribe(
      resp => {
        const jwt = resp.headers.get('Authorization');
        console.log(jwt);

        this.authentificationService.saveToken(jwt);

        if (jwt != null) {
          this.router.navigateByUrl('/dashboard');
          console.log(this.router.url);
        }

        if (this.jwtHelper.isTokenExpired(jwt)) {
          console.log('Token Expired');
          localStorage.clear();
          location.reload();
          this.router.navigateByUrl('/login');
        }

        console.log('Token decode : ', this.jwtHelper.decodeToken(jwt));
        console.log('Token Expiration : ', this.jwtHelper.getTokenExpirationDate(jwt));
        console.log('Is Token Expired : ', this.jwtHelper.isTokenExpired(jwt));
      },
      err => {
          if (err.status === 403) {
              this.modalRef = this.modalService.show(template);
          }
      }
    );
  }

}
