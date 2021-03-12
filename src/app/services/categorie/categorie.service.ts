import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { Categorie } from 'app/model/Categorie.model';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  constructor(private httpClient: HttpClient, private tokenUtil: TokenService) { }
  getAllCategorie(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'categorie/all',
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  enCours(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'categorie/encours',
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  addCategorie(categorie: Categorie) {
    return this.httpClient.post(environment.apiUrl + 'categorie/add', categorie,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  updateCategorie(id: number, categorie: Categorie) {
    return this.httpClient.put(environment.apiUrl + 'categorie/update/' + id, categorie,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  findById(id) {
    return this.httpClient.get<Categorie>(environment.apiUrl + 'categorie/' + id,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
}
