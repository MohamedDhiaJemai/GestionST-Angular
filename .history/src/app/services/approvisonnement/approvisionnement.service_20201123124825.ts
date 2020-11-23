import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';
import { Approvisonnement } from 'app/model/Approvisonnement.model';

@Injectable({
  providedIn: 'root'
})
export class ApprovisionnementService {

  apiUrl = 'http://192.168.0.143:8443/approvisionnement';
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

  findByArticle(id) {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.get<Approvisonnement>(this.apiUrl + '/' + id,
    {headers: new HttpHeaders({'authorization': this.jwtToken})});
  }

  findByStock(id) {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.get<Approvisonnement>(this.apiUrl + '/' + id,
    {headers: new HttpHeaders({'authorization': this.jwtToken})});
  }

}
