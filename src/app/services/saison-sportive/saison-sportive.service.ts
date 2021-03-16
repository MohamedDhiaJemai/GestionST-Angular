import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SaisonSportive } from 'app/model/SaisonSportive.model';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaisonSportiveService {
  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'saison/all');
  }
  add(saison: SaisonSportive) {
    return this.httpClient.post(environment.apiUrl + 'saison/add', saison);
  }
  update(id: number, saison: SaisonSportive) {
    return this.httpClient.put(environment.apiUrl + 'saison/update/' + id, saison);
  }
  findById(id) {
    return this.httpClient.get<SaisonSportive>(environment.apiUrl + 'saison/' + id);
  }
}
