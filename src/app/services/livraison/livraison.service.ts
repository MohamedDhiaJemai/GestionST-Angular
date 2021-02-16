import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { Livraison } from 'app/model/Livraison.model';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {
  constructor(private httpClient: HttpClient, private tokenUtil: TokenService) { }
  findById(id: number) {
    return this.httpClient.get<Livraison>(environment.apiUrl + 'livraison/' + id,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  update(id: number, livraison: Livraison) {
    return this.httpClient.put(environment.apiUrl + 'livraison/update/' + id, livraison,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  getAll(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'livraison/all',
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  enAttente(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'livraison/attente',
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  findByTransaction(id: string): Observable<any> {
    return this.httpClient.get<Livraison>(environment.apiUrl + 'livraison/transaction/' + id,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  validerByTransaction(id: string) {
    return this.httpClient.post(environment.apiUrl + 'livraison/transaction/' + id, null,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  validerById(id: number) {
    return this.httpClient.post(environment.apiUrl + 'livraison/' + id, null,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
}
