import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie } from 'app/model/Categorie.model';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  constructor(private httpClient: HttpClient) { }
  getAllCategorie(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'categorie/all');
  }
  enCours(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'categorie/encours');
  }
  addCategorie(categorie: Categorie) {
    return this.httpClient.post(environment.apiUrl + 'categorie/add', categorie);
  }
  updateCategorie(id: number, categorie: Categorie) {
    return this.httpClient.put(environment.apiUrl + 'categorie/update/' + id, categorie);
  }
  findById(id) {
    return this.httpClient.get<Categorie>(environment.apiUrl + 'categorie/' + id);
  }
}
