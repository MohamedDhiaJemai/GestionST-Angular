import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';
import { Observable } from 'rxjs';
import { ServiceComplementaire } from 'app/model/ServiceComplementaire.model';
import { ServicePrincipal } from 'app/model/ServicePrincipal.model';
import { ServiceAutre } from 'app/model/ServiceAutre.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceSTService {

  apiUrl = 'http://127.0.0.1:8443/principal';
  apiUrlComplement = 'http://127.0.0.1:8443/complement';
  apiUrlAutre = 'http://127.0.0.1:8443/autre';

  private jwtToken = null;
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private httpClient: HttpClient, private router: Router) { }

  loadToken() {
    this.jwtToken = localStorage.getItem('token');
  }

  addToken() {
    localStorage.clear();
    // location.reload();
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
    return this.httpClient.get<ServicePrincipal>(this.apiUrl + '/' + id,
      { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }

  updateService(id: number, serviceSt: ServicePrincipal) {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.put(this.apiUrl + '/update/' + id, serviceSt,
      { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }

  addService(serviceSt: ServicePrincipal) {
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
    return this.httpClient.get<ServiceComplementaire>(this.apiUrlComplement + '/' + id,
      { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }

  updateServiceComplement(id: number, serviceSt: ServiceComplementaire) {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.put(this.apiUrlComplement + '/update/' + id, serviceSt,
      { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }

  addServiceComplement(serviceSt: ServiceComplementaire) {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.post(this.apiUrlComplement + '/add', serviceSt,
      { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }

  // SERVICE autre

  getAllServiceAutre(): Observable<any> {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.get(this.apiUrlAutre + '/all', { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }

  findByIdAutre(id) {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.get<ServiceAutre>(this.apiUrlAutre + '/' + id,
      { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }

  updateServiceAutre(id: number, serviceSt: ServiceAutre) {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.put(this.apiUrlAutre + '/update/' + id, serviceSt,
      { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }

  addServiceAutre(serviceSt: ServiceAutre) {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.post(this.apiUrlAutre + '/add', serviceSt,
      { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }
}
