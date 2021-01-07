import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';
import { ServiceST } from 'app/model/ServiceST.Model';
import { ServiceSTT } from 'app/model/ServiceSTT.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceSTService {

  apiUrl = 'http://localhost:8443/principal';
  apiUrlComplement = 'http://localhost:8443/complement';
  apiUrlTest = 'http://localhost:8443/test';

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

  getAllService(): Observable<any> {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.get(this.apiUrl + '/all', { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }

  findById(id) {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.get<ServiceST>(this.apiUrl + '/' + id,
      { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }

  updateService(id: number, serviceSt: ServiceST) {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.put(this.apiUrl + '/update/' + id, serviceSt,
      { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }

  addService(serviceSt: ServiceST) {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.post(this.apiUrl + '/add', serviceSt,
      { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }

  // SERVICE COMPLEMENTAIRE

  getAllServiceComplement(): Observable<any> {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.get(this.apiUrlComplement + '/all', { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }

  findByIdComplement(id) {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.get<ServiceST>(this.apiUrlComplement + '/' + id,
      { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }

  updateServiceComplement(id: number, serviceSt: ServiceST) {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.put(this.apiUrlComplement + '/update/' + id, serviceSt,
      { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }

  addServiceComplement(serviceSt: ServiceST) {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.post(this.apiUrlComplement + '/add', serviceSt,
      { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }

  // SERVICE Test

  getAllServiceTest(): Observable<any> {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.get(this.apiUrlTest + '/all', { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }

  findByIdTest(id) {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.get<ServiceST>(this.apiUrlTest + '/' + id,
      { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }

  updateServiceTest(id: number, serviceSt: ServiceSTT) {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.put(this.apiUrlTest + '/update/' + id, serviceSt,
      { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }

  addServiceTest(serviceSt: ServiceSTT) {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.post(this.apiUrlTest + '/add', serviceSt,
      { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }
}
