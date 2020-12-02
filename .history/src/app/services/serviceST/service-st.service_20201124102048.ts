import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class ServiceSTService {

  apiUrl = 'http://192.168.0.143:8443/service';
  private jwtToken = null;
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private httpClient: HttpClient, private router: Router) { }

  loadToken() {
    this.jwtToken = localStorage.getItem('token');
  }

  addToken() {
    localStorage.clear();
    location.reload();
    this.router.navigateByUrl('/login');
  }
}
