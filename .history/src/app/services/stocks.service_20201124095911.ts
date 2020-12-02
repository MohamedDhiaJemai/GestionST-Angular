import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';
import { Stocks } from 'app/model/Stocks.model';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  apiUrl = 'http://192.168.0.143:8443/stocks';
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

  addStocks(stocks: Stocks) {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.post(this.apiUrl + '/add', stocks,
      { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }


}
