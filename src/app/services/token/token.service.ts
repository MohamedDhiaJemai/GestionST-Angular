import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  public jwtToken: string;
  private jwtHelper: JwtHelperService = new JwtHelperService();
  constructor(private router: Router) { }
  saveToken(jwt: string) {
    this.jwtToken = jwt;
    localStorage.setItem('token', jwt);
    const roles = this.jwtHelper.decodeToken(this.jwtToken).roles;
    let array = new Array<any>();
    roles.forEach(element => {
      array.push(element.authority);
    });
    localStorage.setItem('roles', JSON.stringify(array));
  }
  getToken() {
    if (this.jwtToken === undefined) {
      this.jwtToken = localStorage.getItem('token');
    }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) {
      localStorage.clear();
      this.router.navigateByUrl('/login');
    }
    return this.jwtToken;
  }

  clearToken() { this.jwtToken = undefined; }
}
