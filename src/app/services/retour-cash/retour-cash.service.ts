import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';
import { RetourCash } from 'app/model/RetourCash.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RetourCashService {

  apiUrl = 'http://127.0.0.1:8443/retour-cash';
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

  findById(id: string) {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.get<RetourCash>(this.apiUrl + '/' + id,
      { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }

  update(id: string, retourCash: RetourCash) {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.put(this.apiUrl + '/update/' + id, retourCash,
      { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }

  getAll(): Observable<any> {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.get(this.apiUrl + '/all', { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }

  enAttente(): Observable<any> {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.get(this.apiUrl + '/attente', { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }

  retour(id: string) {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.post(this.apiUrl + '/' + id, null,
      { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }
}