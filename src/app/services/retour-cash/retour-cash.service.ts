import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { RetourCash } from 'app/model/RetourCash.model';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RetourCashService {
  constructor(private httpClient: HttpClient, private tokenUtil: TokenService) { }
  findById(id: string) {
    return this.httpClient.get<RetourCash>(environment.apiUrl + 'retour-cash/' + id,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  update(id: string, retourCash: RetourCash) {
    return this.httpClient.put(environment.apiUrl + 'retour-cash/update/' + id, retourCash,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  getAll(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'retour-cash/all',
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  enAttente(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'retour-cash/attente',
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  retour(id: string) {
    return this.httpClient.post(environment.apiUrl + 'retour-cash/' + id, null,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
}
