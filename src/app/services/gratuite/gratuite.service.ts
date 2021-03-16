import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gratuite } from 'app/model/Gratuite.model';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GratuiteService {
  constructor(private httpClient: HttpClient) { }
  findById(id: number) {
    return this.httpClient.get<Gratuite>(environment.apiUrl + 'gratuite/' + id);
  }
  getAll(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'gratuite/all');
  }
  add(gratuite: Gratuite) {
    return this.httpClient.post(environment.apiUrl + 'gratuite/add', gratuite);
  }
  update(id: number, gratuite: Gratuite) {
    return this.httpClient.put(environment.apiUrl + 'gratuite/update/' + id, gratuite);
  }
  active(id: number) {
    return this.httpClient.get<Gratuite>(environment.apiUrl + 'gratuite/active/' + id);
  }
  findByJoueur(id: number): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'gratuite/joueur/' + id);
  }

}
