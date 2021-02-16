import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { Observable } from 'rxjs';
import { ServiceComplementaire } from 'app/model/ServiceComplementaire.model';
import { ServicePrincipal } from 'app/model/ServicePrincipal.model';
import { ServiceAutre } from 'app/model/ServiceAutre.model';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceSTService {
  constructor(private httpClient: HttpClient, private tokenUtil: TokenService) { }
  getAllService(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'principal/all',
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  findById(id) {
    return this.httpClient.get<ServicePrincipal>(environment.apiUrl + 'principal/' + id,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  updateService(id: number, serviceSt: ServicePrincipal) {
    return this.httpClient.put(environment.apiUrl + 'principal/update/' + id, serviceSt,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  addService(serviceSt: ServicePrincipal) {
    return this.httpClient.post(environment.apiUrl + 'principal/add', serviceSt,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  // SERVICE COMPLEMENTAIRE
  getAllServiceComplement(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'complement/all',
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  findByIdComplement(id) {
    return this.httpClient.get<ServiceComplementaire>(environment.apiUrl + 'complement/' + id,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  updateServiceComplement(id: number, serviceSt: ServiceComplementaire) {
    return this.httpClient.put(environment.apiUrl + 'complement/update/' + id, serviceSt,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  addServiceComplement(serviceSt: ServiceComplementaire) {
    return this.httpClient.post(environment.apiUrl + 'complement/add', serviceSt,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  // SERVICE autre
  getAllServiceAutre(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'autre/all',
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  findByIdAutre(id) {
    return this.httpClient.get<ServiceAutre>(environment.apiUrl + 'autre/' + id,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  updateServiceAutre(id: number, serviceSt: ServiceAutre) {
    return this.httpClient.put(environment.apiUrl + 'autre/update/' + id, serviceSt,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  addServiceAutre(serviceSt: ServiceAutre) {
    return this.httpClient.post(environment.apiUrl + 'autre/add', serviceSt,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
}
