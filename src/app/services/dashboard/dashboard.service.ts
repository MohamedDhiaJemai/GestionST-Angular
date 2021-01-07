import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  apiUrl = 'http://127.0.0.1:8443/dashboard';
  private jwtToken = null;
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private httpClient: HttpClient, private router: Router) { }

  private loadToken() {
    this.jwtToken = localStorage.getItem('token');
  }

  private addToken() {
    localStorage.clear();
    // location.reload();
    this.router.navigateByUrl('/login');
  }

}
