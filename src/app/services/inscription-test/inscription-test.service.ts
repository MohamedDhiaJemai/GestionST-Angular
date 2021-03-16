import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InscriptionTest } from 'app/model/InscriptionTest.model';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InscriptionTestService {
  constructor(private httpClient: HttpClient) { }
  findById(id: number) {
    return this.httpClient.get<InscriptionTest>(environment.apiUrl + 'inscriptions/' + id);
  }
  update(id: number, inscription: InscriptionTest) {
    return this.httpClient.put(environment.apiUrl + 'inscriptions/update/' + id, inscription);
  }

  editerEtat(id: number, inscription: InscriptionTest) {
    return this.httpClient.put(environment.apiUrl + 'inscriptions/etat/' + id, inscription);
  }

  valider(id: number, inscription: InscriptionTest) {
    return this.httpClient.put(environment.apiUrl + 'inscriptions/valider/' + id, inscription);
  }
  getAll(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'inscriptions/all');
  }

  valide(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'inscriptions/valide');
  }

  nonValide(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'inscriptions/non-valide');
  }
}
