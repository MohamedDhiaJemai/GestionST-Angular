import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Livraison } from 'app/model/Livraison.model';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { LivraisonSearch } from 'app/model/livraisonSearch.model';
import { ChangerTailleInfos } from 'app/model/ChangerTailleInfos.model';

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {
  constructor(private httpClient: HttpClient) { }
  findById(id: number) {
    return this.httpClient.get<Livraison>(environment.apiUrl + 'livraison/' + id);
  }
  update(id: number, livraison: Livraison) {
    return this.httpClient.put(environment.apiUrl + 'livraison/update/' + id, livraison);
  }
  getAll(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'livraison/all');
  }
  enAttente(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'livraison/attente');
  }
  findByTransaction(id: string): Observable<any> {
    return this.httpClient.get<Livraison>(environment.apiUrl + 'livraison/transaction/' + id);
  }
  validerByTransaction(id: string) {
    return this.httpClient.post(environment.apiUrl + 'livraison/transaction/' + id, null);
  }
  validerById(id: number) {
    return this.httpClient.post(environment.apiUrl + 'livraison/' + id, null);
  }
  getToday(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'livraison/today');
  }
  find(params: LivraisonSearch): Observable<any> {
    return this.httpClient.post(environment.apiUrl + 'livraison/find', params);
  }
  findCommune(id: number): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'livraison/find/' + id);
  }

  changerTaille(params: ChangerTailleInfos): Observable<any> {
    return this.httpClient.post(environment.apiUrl + 'livraison/change', params);
  }
}
