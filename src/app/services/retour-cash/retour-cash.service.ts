import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RetourCash } from 'app/model/RetourCash.model';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RetourCashService {
  constructor(private httpClient: HttpClient) { }
  findById(id: string) {
    return this.httpClient.get<RetourCash>(environment.apiUrl + 'retour-cash/' + id);
  }
  update(id: string, retourCash: RetourCash) {
    return this.httpClient.put(environment.apiUrl + 'retour-cash/update/' + id, retourCash);
  }
  getAll(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'retour-cash/all');
  }
  enAttente(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'retour-cash/attente');
  }
  retour(id: string) {
    return this.httpClient.post(environment.apiUrl + 'retour-cash/' + id, null);
  }
}
