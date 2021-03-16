import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceComplementaire } from 'app/model/ServiceComplementaire.model';
import { ServicePrincipal } from 'app/model/ServicePrincipal.model';
import { ServiceAutre } from 'app/model/ServiceAutre.model';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceSTService {
  constructor(private httpClient: HttpClient) { }
  getAllService(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'principal/all');
  }
  findById(id) {
    return this.httpClient.get<ServicePrincipal>(environment.apiUrl + 'principal/' + id);
  }
  updateService(id: number, serviceSt: ServicePrincipal) {
    return this.httpClient.put(environment.apiUrl + 'principal/update/' + id, serviceSt);
  }
  addService(serviceSt: ServicePrincipal) {
    return this.httpClient.post(environment.apiUrl + 'principal/add', serviceSt);
  }
  // SERVICE COMPLEMENTAIRE
  getAllServiceComplement(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'complement/all');
  }
  findByIdComplement(id) {
    return this.httpClient.get<ServiceComplementaire>(environment.apiUrl + 'complement/' + id);
  }
  updateServiceComplement(id: number, serviceSt: ServiceComplementaire) {
    return this.httpClient.put(environment.apiUrl + 'complement/update/' + id, serviceSt);
  }
  addServiceComplement(serviceSt: ServiceComplementaire) {
    return this.httpClient.post(environment.apiUrl + 'complement/add', serviceSt);
  }
  // SERVICE autre
  getAllServiceAutre(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'autre/all');
  }
  findByIdAutre(id) {
    return this.httpClient.get<ServiceAutre>(environment.apiUrl + 'autre/' + id);
  }
  updateServiceAutre(id: number, serviceSt: ServiceAutre) {
    return this.httpClient.put(environment.apiUrl + 'autre/update/' + id, serviceSt);
  }
  addServiceAutre(serviceSt: ServiceAutre) {
    return this.httpClient.post(environment.apiUrl + 'autre/add', serviceSt);
  }
}
