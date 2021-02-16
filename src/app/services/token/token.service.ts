import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  public jwtToken: string;
  private jwtHelper: JwtHelper = new JwtHelper();
  constructor(private router: Router) { }
  getToken() {
    if (this.jwtToken === undefined) {
      this.jwtToken = localStorage.getItem('token');
    } else {
      if (this.jwtHelper.isTokenExpired(this.jwtToken)) {
        localStorage.clear();
        this.router.navigateByUrl('/login');
      }
    }
    return this.jwtToken;
  }
}
