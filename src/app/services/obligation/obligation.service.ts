import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Obligation } from 'app/model/Obligation.model';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObligationService {
  constructor(private httpClient: HttpClient) { }
  findById(id: number) {
    return this.httpClient.get<Obligation>(environment.apiUrl + 'obligation/' + id);
  }
  getAll(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'obligation/all');
  }
  add(obligation: Obligation) {
    return this.httpClient.post<Obligation>(environment.apiUrl + 'obligation/add', obligation);
  }
  tenu(id: number, annee: string) {
    return this.httpClient.get<Obligation>(environment.apiUrl + 'obligation/tenu/' + annee + '/' + id);
  }
  inscri(id: number, annee: string) {
    return this.httpClient.get<Obligation>(environment.apiUrl + 'obligation/inscri/' + annee + '/' + id);
  }
}
