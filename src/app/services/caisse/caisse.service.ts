import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Caisse } from 'app/model/Caisse.model';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CaisseService {
  constructor(private httpClient: HttpClient) { }
  findCaisse(idBorne: number) {
    return this.httpClient.get<Caisse>(environment.apiUrl + 'caisse/' + idBorne);
  }
  findArrets(idBorne: number): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'caisse/arrets/' + idBorne);
  }
}
