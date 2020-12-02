import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';
import { Transaction } from 'app/model/Transaction.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  apiUrl = 'http://192.168.0.143:8443/transaction';
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

  getAllTrascation(): Observable<any> {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.get(this.apiUrl + '/all', { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }

  findById(id) {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.get<Transaction>(this.apiUrl + '/' + id,
      { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }

}
