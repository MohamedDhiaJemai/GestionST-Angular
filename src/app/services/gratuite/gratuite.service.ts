import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';
import { Gratuite } from 'app/model/Gratuite.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GratuiteService {
  apiUrl = 'http://127.0.0.1:8443/gratuite';
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

  findById(id: number) {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.get<Gratuite>(this.apiUrl + '/' + id,
      { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }

  getAll(): Observable<any> {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.get(this.apiUrl + '/all', { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }

  add(gratuite: Gratuite) {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.post(this.apiUrl + '/add', gratuite,
      { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }

  update(id: number, gratuite: Gratuite) {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.put(this.apiUrl + '/update/' + id, gratuite,
      { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }

  active(id: number) {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.get<Gratuite>(this.apiUrl + '/active/' + id,
      { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }

  findByJoueur(id: number): Observable<any> {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.get(this.apiUrl + '/joueur/' + id,
      { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }

}
