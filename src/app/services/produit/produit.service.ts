import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { Produit } from 'app/model/produit.model';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  constructor(private httpClient: HttpClient, private tokenUtil: TokenService) { }
  getAllProduit(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'produit/all',
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  addProduit(produit: Produit) {
    return this.httpClient.post(environment.apiUrl + 'produit/add', produit,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  updateProduit(id: number, produit: Produit) {
    return this.httpClient.put(environment.apiUrl + 'produit/update/' + id, produit,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  findById(id) {
    return this.httpClient.get<Produit>(environment.apiUrl + 'produit/findById/' + id,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
}
